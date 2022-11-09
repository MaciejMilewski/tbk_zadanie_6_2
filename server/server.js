const express = require("express");
const app = express();
const { Pool } = require('pg');

const host = process.env.DB_HOST || 'postgres';
const port = process.env.DB_PORT || '5432';

const pool = new Pool({
    user: 'dbuser',
    host: host,
    database: 'sample-db',
    password: 'secretpassword',
    port: parseInt(port),
})

app.listen(3000, '0.0.0.0', ()=>{
    console.log('Application listening at 0.0.0.0:3000');
})

app.get('/movies', async (req,res)=>{
    const result = await pool.query('SELECT * FROM movies');
    res.send(result.rows);
})

app.get('/movies/:id', async (req,res)=>{
    const result = await pool.query('SELECT * FROM movies WHERE movie_id=' + req.params.id);
    res.send(result.rows);
})

app.get('/movies/duration/avarage', async (req,res)=>{
    const result = await pool.query('SELECT AVG(duration) FROM movies');
    res.send(result.rows);
})
