const express = require('express');
const app = express();
const session=require('express-session');
const port = process.env.PORT || 3000;

app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));
 
// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session && req.session.user === "user" && req.session.admin)
    return next();
  else
    return res.sendStatus(401);
};
 
//Authentication and authorization middleware function.The values to check against is hardcoded for demonstration purpose. 

// Login endpoint
app.get('/login', function (req, res) {
  if (!req.query.username || !req.query.password) {
    res.send('login failed');    
  } else if(req.query.username === "user" || req.query.password === "password") {
    req.session.user = "user";
    req.session.admin = true;
    res.send("login success!");
  }
});

//The login url to check log the user in by saving the user and user access level in a session. The session will be different for each user, and also be unique for the same user using different browsers. For example, if the same user logged in using Chrome, and the open up Firefox, the user will have to login again in FireFox in order to gain protected resources. For demonstration purpose, this is a get request and passing in the info through query parameters. A real web app will usually be using a post request and passing in the data in the post form. Again the user and passwords are hardcoded here for demonstration purpose. 

// Logout endpoint
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});
 //localhost:3000/logout, logout by destroy the session. Once the session is destroyed, the user will have to hit the login url again in order to gain protected resources.


// Get content endpoint
app.get('/content', auth, function (req, res) {
    res.send("You can only see this if you've logged in.");
});
 
//localhost:3000/content, get the protected contents. The auth function above is passed in the second parameters as a middleware before it proceed to serve the content to the user. If the auth function determined the user is not valid, it will not proceed to the thrid function to serve the content.

// Visit these urls in a browser
// localhost:3000/content
// localhost:3000/login?username=amy&password=amyspassword
// localhost:3000/content
// localhost:3000/logout
// localhost:3000/content


app.listen(port);
console.log('Server started at http://localhost:' + port);

//https://www.codexpedia.com/node-js/a-very-basic-session-auth-in-node-js-with-express-js/