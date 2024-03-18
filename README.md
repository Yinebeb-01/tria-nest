# Backend - Nest

<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>

## Description

REST API built with [Nest](https://github.com/nestjs/nest). The avaiable REST API is only for Departmet and all apis are ready.

## Usage(Example):

**[swagger docs](http://localhost:3001/api)**

1. **Create new department**

```curl
POST /department
```

- Example

```curl
curl --location 'http://localhost:3000/department' \
--header 'Content-Type: application/json' \
--data '{
    "name": "COO",
    "description": "coo department description",
    "managing_department": 1
}'
```

2. **Update department**

```curl
PATCH /department:id
```

- Example

```curl
curl --location --request PATCH 'http://localhost:3000/department/3' \
--header 'Content-Type: application/json' \
--data '{
    "name": "COO",
    "description": "updated-coo department description",
    "managing_department": 1
}'
```

3. **Get department by ID**

```curl
GET /department/:id
```

- Example

```curl
curl --location 'http://localhost:3000/department/2'
```

4. **Delete department**

```curl
DELETE /department/:id
```

- Example

```curl
curl --location --request DELETE 'http://localhost:3000/department/2'
```

5. **Get all department**

````curl
GET /department

- Example

```curl
curl --location 'http://localhost:3000/department'
````

6. **Get Child Department**

```curl
GET /department/:id/child
```

- Example

```curl
curl --location 'http://localhost:3000/department/2/child'
```

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

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Yinebeb Tariku](mailto:yintar5@gmail.com)
- Website - [Linkedin.com](https://linkedin.com/in/yinebeb-tariku)
- Twitter - [@sil_enat](https://twitter.com/sil_enat)
