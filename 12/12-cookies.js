const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 3000;

app.use(cookieParser());

//set a simple for homepage route
app.get('/', (req, res) => {
    res.send('Welcome to exercise 12. A simple HTTP cookie demonstrative server.');
});

//a get route for adding a cookie
app.get('/setcookie', (req, res) => {
    res.cookie(`Cookie token name`,`encrypted cookie string Value`,{
        maxAge: 5000,
        // expires works the same as the maxAge
        expires: new Date('09 04 2022'),
        secure: true,
        httpOnly: true,
        sameSite: 'lax'
    });
    res.send('Cookie have been saved successfully');
});
// get the cookie incoming request
app.get('/getcookie', (req, res) => {
    //show the saved cookies
    console.log(req.cookies)
    res.send(req.cookies);
});


app.get('/deletecookie', (req, res) => {
    //show the saved cookies
    res.clearCookie()
    res.send('Cookie has been deleted successfully');
});
  app.listen(port);
  console.log('Server started at http://localhost:' + port);