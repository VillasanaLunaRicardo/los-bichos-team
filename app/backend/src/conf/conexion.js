const mysql = require("mysql");
const conecta = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    port:"3306",
    database:"proyecto"
});
conecta.connect();
module.exports = conecta;
