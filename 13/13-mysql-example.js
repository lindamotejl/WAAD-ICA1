const express = require ('express');
const bodyParser = require ('body-parser');
const mysql = require('mysql');

const app= express();
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
  })

  
pool.getConnection(function(err, connection) {
    if (err) throw err;
    connection.query("CREATE DATABASE if not exists mydbStudent", function (err, result) {
      if (err) throw err;
      console.log("Database created");
      console.log("Connected!");
    });
  });

  pool.getConnection(function(err,connection) {
    if (err) throw err;
    connection.changeUser({database: "mydbStudent"});
    var sql = "CREATE TABLE if not exists student_list (ID int primary key auto_increment, name VARCHAR(255), value int)";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
});


    
    

  
  // select all students
  app.get('/students', (req,res) =>{
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.changeUser({database: "mydbStudent"});
    connection.query("SELECT * FROM student_list", function (err, result, fields) {
        if (err) throw err;
    res.send(result);
    });
}); 
}); 

  // insert new student

app.post('/students',(req,res) =>{
    pool.getConnection((err,connection)=>{
   
    if(err) throw err;
    connection.changeUser({database: "mydbStudent"});
    const params = req.body
    connection.query('INSERT INTO student_list SET ?', params, (err,rows)=>{
        connection.release()
        if(!err){
            res.send('An entry has been made into the Student table.')
        } else {
            console.log(err)
        } 
    })
    });
});

// select student by id
app.get('/students/:id', (req,res) =>{
    pool.getConnection((err, connection) => {
        connection.query("SELECT * FROM student_list where id = ?",[req.params.id],(err,rows) => {
        connection.release()

    if(!err){
    connection.changeUser({database: "mydbStudent"});
        res.send(rows)
    } else {
        console.log(err)
    }
  })
})
}); 

  // update record

  app.put('/students',(req,res) =>{
    pool.getConnection((err,connection)=>{
    if(err) throw err;
    connection.changeUser({database: "mydbStudent"});
    const {ID, name, value}= req.body;
    connection.query('UPDATE student_list SET name=?, value = ?, WHERE ID = ?', [name,ID,value], (err,rows)=>{
        connection.release()
        if(!err){
            res.send('Your entry has been updated.')
        } else {
            console.log(err)
        }
    })
    });
});

// delete student by id
app.delete('/students/:id', (req,res) =>{
    pool.getConnection((err, connection) => {
        connection.changeUser({database: "mydbStudent"});
        connection.query("DELETE FROM student_list where id = ?",[req.params.id],(err,rows) => {
        connection.release()
    if(!err){
        res.send(`The student with ID: ${[req.params.id]} has been deleted.`)
    } else {
        console.log(err)
    }
  })
})
}); 

//start server
  app.listen(3000, () => {
    console.log('Server running')
});