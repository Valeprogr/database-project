const express = require("express");
const app = express();
const PORT = 4000;
require('dotenv').config()
const { Pool } = require("pg");


const password = process.env.PASSWORD //Env file
const pool = new Pool({
    user: "mcfztdmy",
    host: "lucky.db.elephantsql.com",
    database: "mcfztdmy",
    password: password,
    port:5432,
});


app.get("/", (req,res,next)=>{
    res.send("<h1>HELLO THERE!</h1>")
})

app.get("/users", (req,res)=>{
    pool    
    pool.query(`SELECT * FROM users;`)
    .then(data => res.json(data.rows))
    .catch(e => res.sendStatus(500))
})
    // >> output: users *
    //console.log(result.rows.map(user => user.id).join(' '))
app.get("/users/:id", (req, res)=>{
    const { id } = req.params;
    console.log(id)
   pool
    .query(`SELECT * FROM users WHERE id=$1;`, [id])
    .then(data => res.json(data.rows))
    .catch(e =>res.sendStatus(404));
})





app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})