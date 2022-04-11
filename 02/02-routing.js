const express = require('express')
const app = express()
const router = express.Router();
const port = process.env.PORT || 3000;


app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })
  
//to test, run server and test the routes on Postman

app.listen(port);
console.log('Server started at http://localhost:' + port);