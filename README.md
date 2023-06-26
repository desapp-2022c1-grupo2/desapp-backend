## Description

Aplicación de soporte | Diseño Industrial | UNAHUR

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Authentication

Esta REST API necesita autorización para los cada uno de los módulos, exceptuando el mismo login que es necesario.
Para poder utilizarla,

- La aplicación necesita un Bearer token como header
- Se obtiene enviando un GET a `/api/auth/login` enviando como body lo siguiente:

```json
{
  "username": "email_admin_o_jtp",
  "password": "contraseña"
}
```

Solamente los usuarios Admin y JTP pueden solicitar el login

## Endpoints

### Prefijos

- /api/
- /api/admin
- /api/student
- /api/course
- /api/jtp
- /api/assignment
- /api/auth/login

## Routers (map)

### Admin

- GET /api/admin/
- GET /api/admin/:id
- POST /api/admin/
- DELETE /api/admin/:id
- PATCH /api/admin/:id
- GET /api/admin/count

### Student

- GET /api/student/
- GET /api/student/:id
- POST /api/student/
- DELETE /api/student/:id
- PATCH /api/student/:id
- GET /api/student/count (obtiene la cantidad total de estudiantes)

### Course

- GET /api/course/
- GET /api/course/:id
- POST /api/course/
- DELETE /api/course/:id
- PATCH /api/course/:id

### Jtp

- GET /api/jtp/
- GET /api/jtp/:id
- POST /api/jtp/
- DELETE /api/jtp/:id
- PATCH /api/jtp/:id
- GET /api/jtp/count (no implementado)

### Assignment

- GET /api/assignment/
- GET /api/assignment/:id
- POST /api/assignment/
- DELETE /api/assignment/:id
- PATCH /api/assignment/:id
- GET /api/assignment/count (obtiene la cantidad total de Tps creados)

### Authentication

- POST /api/auth/login

### Evaluciónes

- GET /api/evaluation/
- GET /api/evaluation/:id
- POST /api/evaluation/
- DELETE /api/evaluation/:id
- PATCH /api/evaluation/:id
- GET api/evaluation/jtp/:id (obtiene las evaluaciones segun jtp id)
- GET api/evaluation/student/:id (obtiene las evaluaciones segun student id)
- GET api/evaluation/course/:id (obtiene las evaluaciones segun course id)

### Assignement Submitted

- GET /api/assignment_submitted/count

### Estadisticas

- GET /api/statistics/:jtpId (obtiene todos los Tps creados por JTP)

## Docker compose

``` bash
# levanta el contenedor
$ docker-compose up
```

## Variables de entorno

```bash
# "development docker" - "production" heroku
NODE_EVN=development

# default "development
```

## Credentials

- DATABASE_HOST

- DATABASE_ROOT_PASSWORD

- DATABASE_NAME

- DATABASE_USER

- DATABASE_PASSWORD

- DATABASE_PORT

- PORT

- NODE_ENV

