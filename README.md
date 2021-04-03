# Welcome to Armagedon

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000)

> HACK THAT STARTUP VOL.2 ARMAGEDDON EDITION

> Postman docu-api  
> https://documenter.getpostman.com/view/10919013/TzCQZkxb

## Install

```sh
npm install
```

### Load initial data

You can load the database with initial data with:

```sh
npm run initDb
```

Warning! this script delete database contents before the load.
Use in production only in the first deployment.

### Usage

```sh
npm run start
```

### Run tests

```sh
npm run dev
```

## API

### **List of User**

_Login Required_  
GET/user/all
**response**

```json
[
  {
    "_id": "6068b5bc36ec76d042cdb367",
    "email": "test@test.com",
    "password": "$2b$10$mXAXCVakg5WvxwDGCYkhWuVVIifDEYlAaUClRHwErhpv7pq2ihuo.",
    "createdAt": "2021-04-03T18:36:44.934Z",
    "updatedAt": "2021-04-03T18:36:44.934Z",
    "__v": 0
  }
]
```

- Filters
  - sort and skip : <http://localhost:5000/user?limit=1&skip=2>

### **List of Neas**

_login required_
GET/neas/all

**response**

```json
[
  {
    "_id": "6068cb9ab7ed49ef6091ab0c",
    "full_name": "1862 Apollo (1932 HA)",
    "a": 1.470372413,
    "e": 0.559950159,
    "i": 6.354774105,
    "om": 35.61719647,
    "w": 285.9919159,
    "ma": 199.087018,
    "__v": 0,
    "createdAt": "2021-04-03T20:10:02.038Z",
    "updatedAt": "2021-04-03T20:10:02.038Z"
  }
]
```

- Filters
  - sort and skip : <http://localhost:5000/user?limit=1&skip=2>

### **Create User**

POST/user {body: username: _required_, password: _required_}
**response**

```json{
  "code": 201,
  "data": {
  "email": "useredd@user.com",
  "password": "xxxxxxxx"
  },
  "message": "New user created"
  }
```

### **Create Nea**

POST/neas {body: name: _required_, a, e, i, om, w, ma }

**response**

```json
{
  "code": 200,
  "data": {
    "_id": "6068d1ddacb0a2f4d98981a3",
    "full_name": "test",
    "a": 651436514,
    "e": 3513,
    "i": 35143514,
    "om": 315351,
    "w": 1311,
    "ma": 6461461,
    "createdAt": "2021-04-03T20:36:45.754Z",
    "updatedAt": "2021-04-03T20:36:45.754Z",
    "__v": 0
  },
  "message": "Nea created"
}
```

### **Delete User**

_Login Required_
DELETE/user

**response**

```json
{
  "code": 200,
  "data": {
    "n": 0,
    "ok": 1,
    "deletedCount": 0
  },
  "message": 0
}
```

### **Delete Neas**

_Login Required_

DELETE/neas/1566 Icarus (1949 MA)

```json
{
  "code": 200,
  "data": {
    "n": 0,
    "ok": 1,
    "deletedCount": 0
  },
  "message": 0
}
```

### **Update Neas**

_Login Required_

UPDATE/neas/full*name {body: name: \_required*, a, e, i, om, w, ma }

```json
{
  "code": {
    "n": 1,
    "nModified": 1,
    "ok": 1
  },
  "data": "",
  "message": ""
}
```

### **Update User**

_Login Required_

UPDATE/neas/:username {body: username, password}

**response**

```json
{
  "code": {
    "n": 1,
    "nModified": 1,
    "ok": 1
  },
  "data": "",
  "message": ""
}
```

### **Add List Neas**

POST/neas/addlsit {body:

```json
[
  {
    "full_name": "test1",
    "a": 651436514,
    "e": 3513,
    "i": 35143514,
    "om": 315351,
    "w": 1311,
    "ma": 6461461
  },

  {
    "full_name": "test3",
    "a": 651436514,
    "e": 3513,
    "i": 35143514,
    "om": 315351,
    "w": 1311,
    "ma": 6461461
  }
]
```

**response**

```json
{
  "code": 200,
  "data":[
  {
    "full_name": "test1",
    "a": 651436514,
    "e": 3513,
    "i": 35143514,
    "om": 315351,
    "w": 1311,
    "ma": 6461461
  },

  {
    "full_name": "test3",
    "a": 651436514,
    "e": 3513,
    "i": 35143514,
    "om": 315351,
    "w": 1311,
    "ma": 6461461
  }
]
  "message": "Nea created"
}
```

### How to start a local mongodb instance for development

```ssh
./bin/mongod --dbpath ./data/db --directoryperdb
```

## Config files

Change name file .env copy to .env

Enter the required data

## Author

👤 **Luis Sanchez Prudencio**

- Github: [@LSP-92](https://github.com/LSP-92)
