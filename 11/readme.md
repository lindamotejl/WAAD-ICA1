# Session
The following application demonstrates how sessions are created, and then subsequently deleted. The example provides a site that requires authorization of a user logging in. Once User is authorized, they are able to view the content if they close and reopen the tab, or view on the same local machne on a different browser. Once user logs out, the session is destroyed, and the user will be unable to view the content again until once they are logged in. 

The following links are: 


```http://localhost:3000/content```

```http://localhost:3000/login?username=user&password=password```

```http://localhost:3000/logout```

## Dependencies
[NodeJS](https://nodejs.org/en/download/)

## Installation

```
npm install
```



## Usage

```
node 11-seesion.js

```
