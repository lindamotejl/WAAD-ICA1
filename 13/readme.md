# MySQL Example
The application is a REST API connected to a mysql database. User may use GET,POST,DELETE, and PUT methods which correspond to the CRUD database actions. To test the application, the following commands should be executed on Postman.


```GET: localhost:3000/students : select all students```

```GET: localhost:3000/students/:id : select specific students by ID```

```POST: localhost:3000/students : name and value inserted in body in JSON format```

```PUT: localhost:3000/students/:id : name and value inserted in body in JSON format```

```DELETE: localhost:3000/students/:id```

## Dependencies
[NodeJS](https://nodejs.org/en/download/)
[MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

## Installation

```
npm install
```



## Usage

```
node 13-mysql-example.js

```
