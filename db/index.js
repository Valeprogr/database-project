
const { Pool } = require("pg");
require('dotenv').config()

const password = process.env.PASSWORD //Env file
const pool = new Pool({
    user: "mcfztdmy",
    host: "lucky.db.elephantsql.com",
    database: "mcfztdmy",
    password: password,
    port:5432,
});

const db = {
    query: (text, params) =>{
        return pool.query(text, params);
    }
};

module.exports = db ;
