const express = require('express');
const path = require('path');
const app = express();
const pool = require('./db/db');

app.listen(3000, () => {
    console.log("Server ONLIVE");
});

app.use(express.static('img'));
app.use(express.static('css'));
app.use(express.static('js'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/main.html'))
});

app.get('/usuario/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/login.html'))
});

app.get('/usuario/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/registro.html'))
});

app.get('/api', (req, res) => {
    data = pool.query(`SELECT * FROM personas `, async (error, results) =>{
        console.log(typeof(results))
        res.json(results)
    })
    
});

app.post('/api/ingresar/:nombre/:apellido/:correo/:contrasena',(req,res)=>{
    let p = req.params
    data = pool.query(`insert into personas(correo,contrasena,nombre,apellido) values ('${p.correo}','${p.contrasena}','${p.nombre}','${p.apellido}')`, async (error, results) =>{
        if(error){
            console.log(error)
            res.status(204).end()
        }else{
            console.log("exito")
            res.status(204).end()
        }
    })
})

app.get('*',(req,res)=>{
    res.send("error 404")
})