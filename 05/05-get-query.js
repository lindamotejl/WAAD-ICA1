const express = require ('express')
const app = express()


app.get('/index', function(req,res){
    res.send('This is exercise 5')
    console.log(req.query)
})

app.listen(3000)
console.log(`App is listening on port 3000`)
