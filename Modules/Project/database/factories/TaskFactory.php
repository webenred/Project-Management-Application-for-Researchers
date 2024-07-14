<?php

namespace Modules\Project\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     */
    protected $model = \Modules\Project\Models\Task::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'name' => implode(' ', fake()->words()),
            'date_begin' => fake()->date(),
            'date_end' => fake()->date(),
            'description' => fake()->text(),
            'priority' => fake()->word(),
        ];
    }
}
