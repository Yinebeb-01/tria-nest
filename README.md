# Backend - Nest
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
 
  
## Description

REST API built with [Nest](https://github.com/nestjs/nest). The avaiable REST API is only for Departmet and all apis are ready.

### Usage(Example):

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

- Example

```curl
curl --location 'http://localhost:3000/department'
```

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

## Test

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


## Notes
- Add resource, for example `department`:  

  `nest g resource <resource-name>`

- Install orm dependencies, for example for myswl:

  `npm install --save @nestjs/typeorm typeorm mysql2` 