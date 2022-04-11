const express = require('express');
const app = express();

const usernames = ["linda","dina","maryam"];

//possible to retrieve the data that has been sent in the body of the http request.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// create a route
app.get('/users', (req,res) =>{
    res.send(usernames);
});
app.post('/users', (req, res) => {

    if (req.body.hasOwnProperty('username')) {
  
      if(usernames.includes(req.body.username)) {
        res.send(req.body.username + " is an existing user.");
      } else {
        usernames.push(req.body.username)
        res.send(req.body.username + ' IS PUSHED');
      }
    } else {
      res.status(400).send('username not supplied')
    }
  });

  app.delete('/users', (req, res) => {
    let username = req.body;
    let index = usernames.findIndex((array) => array.username === username);
    let deletedUsername = usernames.splice(index);
    res.status(200).send('username ' +(deletedUsername) + ' is deleted.')
    
  });
// start the server
app.listen(3000, () => {
  console.log('Server running');
});