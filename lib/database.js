/**
 * Created by mthomas on 4/3/16.
 */

var mysql = require('mysql');

var db = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

// Test the connection
db.getConnection(function (err, connection) {
    if (err) {
        console.error('error connecting: ' + err.stack);
    }

    console.log('connected as id ', connection.threadId);

    connection.release();
});

module.exports = db;