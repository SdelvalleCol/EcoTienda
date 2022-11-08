const express = require('express');
const path = require('path');
const app = express();
const pool_mongo = require('./db/db.mong')
const pool = require('./db/db');

//Puertos
app.listen(3000, () => {
    console.log("Server ONLIVE");
});

//Archivos estaticos
app.use(express.static('img'));
app.use(express.static('css'));
app.use(express.static('js'));


//RUTAS 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/main.html'))
});

app.get('/usuario/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/login.html'))
});

app.get('/usuario/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/registro.html'))
});


//APIS

//NOSQL
app.get('/api/busqueda/nosql/productos', async (req, res) => {
    const result = await pool_mongo.find()
    res.json(result)
});

app.get('/api/busqueda/nosql/productos/filtro/:nombre', async (req, res) => {
    var nombre = req.params.nombre
    const result = await pool_mongo.find({"name": new RegExp(nombre,'i')})
    res.json(result)
});

app.get('/api/busqueda/nosql/productos/filtro/precio/:min/:max', async (req, res) => {
    var p = req.params
    const result = await pool_mongo.find({"price":{$gt:p.min} , "price":{$lt:p.max}})
    res.json(result)
});

app.get('/api/busqueda/nosql/:id', async (req, res) => {
    var id = req.params.id
    const result = await pool_mongo.find({"id":id})
    res.json(result)
});


//SQL
app.get('/api/busqueda/:correo',(req,res)=>{
    var correo = req.params.correo
    pool.query(`SELECT * FROM personas where correo = '${correo}' `, async (error, resultss) =>{
        res.json(resultss)
    })
})

app.get('/api', (req, res) => {
    pool.query(`SELECT * FROM personas `, async (error, results) =>{
        res.json(results)
    })
});

app.get('/api/busqueda/favoritos/:id/:correo',(req,res)=>{
    var p = req.params
    pool.query(`SELECT id_producto,correo FROM favoritos , personas where id_producto = ${p.id} AND correo = personas_correo AND correo = '${p.correo}'`,async(error,result)=>{
        if(error){
            console.log(error)
        }else{
            res.json(result)
        }
    })
})

app.get('/api/busqueda/favoritos/:correo',(req,res)=>{
    var p = req.params
    pool.query(`SELECT id_producto FROM favoritos , personas where correo = personas_correo AND correo = '${p.correo}'`,async(error,result)=>{
        if(error){
            console.log(error)
        }else{
            res.json(result)
        }
    })
})

app.post('/api/ingresar/:nombre/:apellido/:correo/:contrasena',(req,res)=>{
    let p = req.params
    pool.query(`insert into personas(correo,contrasena,nombre,apellido) values ('${p.correo}','${p.contrasena}','${p.nombre}','${p.apellido}')`, async (error, results) =>{
        if(error){
            console.log(error)
            res.status(204).end()
        }else{
            res.status(200).end()
        }
    })
})

app.post('/api/ingresarfav/:id/:correo',(req,res)=>{
    let p = req.params
    pool.query(`insert into favoritos(id_producto, personas_correo) VALUES ('${p.id}', '${p.correo}')`, async (error, results) =>{
        if(error){
            console.log(error)
            res.status(204).end()
        }else{
            res.status(200).end()
        }
    })
})

app.post('/api/borrar/favoritos/:id/:correo',(req,res)=>{
    let p = req.params
    pool.query(`DELETE from favoritos where id_producto = ${p.id} and personas_correo = '${p.correo}'`, async (error, results) =>{
        if(error){
            console.log(error)
            res.status(204).end()
        }else{
            res.status(200).end()
        }
    })
})

app.get('*',(req,res)=>{
    res.send("error 404")
})