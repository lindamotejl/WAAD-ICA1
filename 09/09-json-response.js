const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

  
// Defining get request at '/' route
app.get('/', function(req, res) {
  res.json({
    text: 'This is a JSON',
  });
});
  
  
// Defining get request at '/array' route
app.get('/array', function(req, res) {
  res.json([{
      number: 1,
      name: ':Linda',
      gender: 'Female'
    },
    {
      number: 2,
      name: 'Irene',
      gender: 'Female'
    }
  ]);
});


  app.listen(port);
  console.log('Server started at http://localhost:' + port);