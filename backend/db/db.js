const mysql = require('mysql');

const db_conn = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'todo'
});

db_conn.connect(function (err) {
    if(err){
        throw err;
    }
    console.log("connected");
    
})


module.exports = db_conn;