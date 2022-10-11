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
- Se obtiene enviando un POST a `/api/auth/login` enviando como body lo siguiente:
```json
{"username": "email_admin_o_jtp", "password": "contraseña"}
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
- GET /api/student/count
### Course
- GET /api/course/
- GET /api/course/:id
- POST /api/course/
- DELETE /api/course/:id
- PATCH /api/course/:id
- GET /api/course/count
### Jtp
- GET /api/jtp/
- GET /api/jtp/:id
- POST /api/jtp/
- DELETE /api/jtp/:id
- PATCH /api/jtp/:id
- GET /api/jtp/count
### Assignment
- GET /api/assignment/
- GET /api/assignment/:id
- POST /api/assignment/
- DELETE /api/assignment/:id
- PATCH /api/assignment/:id
- GET /api/assignment/count
- ### Authentication
- POST /api/auth/login



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

- DATABASE_DATABASE

- DATABASE_USER

- DATABASE_PASSWORD

- DATABASE_PORT

- PORT

- NODE_ENV

