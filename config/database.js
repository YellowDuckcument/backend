const mysql = require("mysql")
const createPool = mysql.createPool;


const pool = createPool({
    port: 3306,
    host: "localhost",
    user: 'root',
    password: '050798',
    database: 'test',
    connectionLimit: 10
})



module.export = pool











