const mysql = require('mysql');
const {database} = require('./llaves');
const {promisify} = require('util');

const pool = mysql.createPool(database);

pool.getConnection((err,connection)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Conexión exitosa");
});

pool.query = promisify(pool.query);
module.exports = pool;
