/**
 * Created by mthomas on 4/3/16.
 */

var express = require('express');
var app     = express();
var db      = require('./lib/database.js');
var port    = process.env.PORT || 8080;

/**
 * Routes
 */
app.get('/', function (req, res) {

    // Get database connection from pool
    db.getConnection(function (err, connection) {
        if (err) {
            res.status(501).send('Database connection error: ', err.stack);
        }

        // Perform the query
        connection.query('SELECT * FROM users', function (err, rows) {
            if (!err) {
                res.status(200).send(rows)
            }
        });

        // Release the connection back into the pool
        connection.release();
    });
});

app.get('/users', function (req, res) {
    db.getConnection(function (err, connection) {
        if (err) {
            res.status(501).send('Database connection error: ', err.stack);
        }
        connection.query('SELECT COUNT(*) FROM users', function (err, rows) {
            if (!err) {
                res.status(200).send(rows)
            }
        });
        connection.release();
    });
});

/**
 * Start the server
 */
app.listen(port);