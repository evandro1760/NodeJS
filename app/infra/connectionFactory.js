var mysql = require('mysql');

function createDBConnection(){
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'casadocodigo_nodejs'
    });
    return connection;
}

module.exports = function(){
    return createDBConnection;
}