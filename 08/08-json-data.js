const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const fs = require('fs');

fs.readFile('text.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
});


  app.listen(port);
  console.log('Server started at http://localhost:' + port);