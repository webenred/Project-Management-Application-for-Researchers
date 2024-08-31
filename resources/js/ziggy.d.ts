/* This file is generated by Ziggy. */
declare module 'ziggy-js' {
  interface RouteList {
    "sanctum.csrf-cookie": [],
    "telescope": [
        {
            "name": "view",
            "required": false
        }
    ],
    "app": [],
    "search.user": [],
    "manage.index": [],
    "manage.unit.index": [],
    "manage.unit.create": [],
    "manage.unit.store": [],
    "manage.unit.show": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.edit": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.update": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.destroy": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.division.create": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.division.store": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.division.show": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        },
        {
            "name": "division",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.division.edit": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        },
        {
            "name": "division",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.division.update": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        },
        {
            "name": "division",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.unit.division.destroy": [
        {
            "name": "unit",
            "required": true,
            "binding": "id"
        },
        {
            "name": "division",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.permission.index": [],
    "manage.permission.create": [],
    "manage.permission.store": [],
    "manage.permission.show": [
        {
            "name": "permission",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.permission.edit": [
        {
            "name": "permission",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.permission.update": [
        {
            "name": "permission",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.permission.destroy": [
        {
            "name": "permission",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.role.index": [],
    "manage.role.create": [],
    "manage.role.store": [],
    "manage.role.show": [
        {
            "name": "role",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.role.edit": [
        {
            "name": "role",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.role.update": [
        {
            "name": "role",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.role.destroy": [
        {
            "name": "role",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.user.index": [],
    "manage.user.create": [],
    "manage.user.store": [],
    "manage.user.show": [
        {
            "name": "user",
            "required": true,
            "binding": "uuid"
        }
    ],
    "manage.user.edit": [
        {
            "name": "user",
            "required": true,
            "binding": "uuid"
        }
    ],
    "manage.user.update": [
        {
            "name": "user",
            "required": true,
            "binding": "uuid"
        }
    ],
    "manage.user.destroy": [
        {
            "name": "user",
            "required": true,
            "binding": "uuid"
        }
    ],
    "manage.board.index": [],
    "manage.board.create": [],
    "manage.board.store": [],
    "manage.board.show": [
        {
            "name": "board",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.board.edit": [
        {
            "name": "board",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.board.update": [
        {
            "name": "board",
            "required": true,
            "binding": "id"
        }
    ],
    "manage.board.destroy": [
        {
            "name": "board",
            "required": true
        }
    ],
    "manage.resource.index": [],
    "manage.resource.create": [],
    "manage.resource.store": [],
    "manage.resource.show": [
        {
            "name": "resource",
            "required": true
        }
    ],
    "manage.resource.edit": [
        {
            "name": "resource",
            "required": true
        }
    ],
    "manage.resource.update": [
        {
            "name": "resource",
            "required": true
        }
    ],
    "manage.resource.destroy": [
        {
            "name": "resource",
            "required": true
        }
    ],
    "manage.project.index": [],
    "manage.project.show": [
        {
            "name": "project",
            "required": true
        }
    ],
    "project.suggest.nature": [],
    "project.suggest.domain": [],
    "project.index": [],
    "project.store": [],
    "project.show": [
        {
            "name": "project",
            "required": true
        }
    ],
    "project.version.duplicate": [
        {
            "name": "project",
            "required": true,
            "binding": "code"
        }
    ],
    "project.version.sync": [
        {
            "name": "project",
            "required": true,
            "binding": "code"
        },
        {
            "name": "version",
            "required": true,
            "binding": "id"
        }
    ],
    "project.version.create": [
        {
            "name": "project",
            "required": true
        }
    ],
    "project.version.store": [
        {
            "name": "project",
            "required": true,
            "binding": "code"
        }
    ],
    "project.version.edit": [
        {
            "name": "project",
            "required": true,
            "binding": "code"
        },
        {
            "name": "version",
            "required": true,
            "binding": "id"
        }
    ],
    "project.version.update": [
        {
            "name": "project",
            "required": true,
            "binding": "code"
        },
        {
            "name": "version",
            "required": true,
            "binding": "id"
        }
    ],
    "board.comment.store": [
        {
            "name": "board",
            "required": true,
            "binding": "id"
        }
    ],
    "board.index": [],
    "board.show": [
        {
            "name": "board",
            "required": true
        }
    ],
    "api.auth.check.user": [],
    "register.create": [],
    "register.store": [],
    "register.created": [],
    "login.create": [],
    "login.store": [],
    "logout.destroy": []
}
}
export {};
