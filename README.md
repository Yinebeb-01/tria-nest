# Backend - Nest

<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>

REST API built with [Nest](https://github.com/nestjs/nest). The avaiable REST API is only for Departmet and all apis are ready.


## Usage

**Follow the [swagger API documentation](http://localhost:3001/api)**

  - Note: Make sure the server is running, or run via `npm run start:dev`

## Run the App

### Docker-compose

```bash
docker-compose up --build
```

### Docker

```bash
docker build -t nest-app .
```

```bash
docker run --network host -p 3000:3000 nest-app`
```

### NPM

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Instalation

* Add resource, for example `department`:

```bash
  nest g resource <resource-name>`
```

* Install Typeorm dependencies, 
  - mysql:

    `npm install --save @nestjs/typeorm typeorm mysql2`

  - Postgres Version

    `npm install pg --save`


## Stay in touch

- Author - [Yinebeb Tariku](mailto:yintar5@gmail.com)
- Website - [Linkedin.com](https://linkedin.com/in/yinebeb-tariku)
- Twitter - [@sil_enat](https://twitter.com/sil_enat)
