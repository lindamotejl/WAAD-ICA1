const express = require('express');
const bodyparser=require ('body-parser')
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

  

  
  app.post('/users/', function(req, res) {
    res.send('Hello ' + req.body.name + '!');
  });
  app.listen(port);
  console.log('Server started at http://localhost:' + port);