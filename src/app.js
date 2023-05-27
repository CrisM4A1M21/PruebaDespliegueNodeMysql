import express from 'express';
import {pool} from './db.js';
import {PORT} from './config.js';

const app = express();

app.get('/', async (req, res)=>{
    const [rows] = await pool.query('select*from usuarios');
    res.json(rows);
});

app.get('/pin', async (req, res)=>{
    const [result] = await pool.query(`SELECT "hello world" as RESULT`);
    console.log(result);
    res.json(result[0]);
});

/*
app.get('/create', async(req, res)=>{
    const result = await pool.query("insert into categorias(`nombre`) values ('Limpieza')");
    res.json(result);
});*/

app.listen(PORT);
console.log('Server in puerto ', PORT);