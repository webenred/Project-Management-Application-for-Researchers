<?php

namespace Modules\Versioning\Models;

use Illuminate\Support\Facades\Config;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Version extends Model
{
    protected $table = "versions";

    protected $guarded = [];

    /**
     * Sets up the relation
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function versionable()
    {
        return $this->morphTo();
    }

    /**
     * Return the user responsible for this version
     */
    public function user(): BelongsTo
    {
        $model = Config::get("auth.providers.users.model");
        return $this->belongsTo($model, 'user_id', 'id');
    }

    /**
     * Return the user responsible for this version
     * @return mixed
     */
    public function getResponsibleUserAttribute()
    {
        if (!$this->user_id) return;

        return $this->user;
    }

    /**
     * Return the versioned  model
     * @return Model
     */
    public function getModel()
    {
        $modelData = is_resource($this->model_data)
            ? stream_get_contents($this->model_data, -1, 0)
            : $this->model_data;

        $className = self::getActualClassNameForMorph($this->versionable_type);
        $model = new $className();
        $model->unguard();
        $model->fill(unserialize($modelData));
        // $model->setTable($model->getTable());
        $model->exists = true;
        $model->reguard();
        return $model;
    }


    /**
     * Revert to the stored model version make it the current version
     *
     * @return Model
     */
    public function revert()
    {
        $model = $this->getModel();
        unset($model->{$model->getCreatedAtColumn()});
        unset($model->{$model->getUpdatedAtColumn()});
        if (method_exists($model, 'getDeletedAtColumn')) {
            unset($model->{$model->getDeletedAtColumn()});
        }
        $model->save();
        return $model;
    }

    /**
     * Diff the attributes of this version model against another version.
     * If no version is provided, it will be diffed against the current version.
     *
     * @param Version|null $againstVersion
     * @return array
     */
    public function diff(Version $againstVersion = null)
    {
        $model = $this->getModel();
        $diff  = $againstVersion ? $againstVersion->getModel() : $this->versionable()->withTrashed()->first()->currentVersion()->getModel();

        $diffArray = array_diff_assoc($diff->getAttributes(), $model->getAttributes());

        if (isset($diffArray[$model->getCreatedAtColumn()])) {
            unset($diffArray[$model->getCreatedAtColumn()]);
        }
        if (isset($diffArray[$model->getUpdatedAtColumn()])) {
            unset($diffArray[$model->getUpdatedAtColumn()]);
        }
        if (method_exists($model, 'getDeletedAtColumn') && isset($diffArray[$model->getDeletedAtColumn()])) {
            unset($diffArray[$model->getDeletedAtColumn()]);
        }

        return $diffArray;
    }
}
