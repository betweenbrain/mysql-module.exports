/**
 * Created by mthomas on 4/3/16.
 */

var express = require('express');
var app = express();
var db = require('./lib/database.js');
var port = process.env.PORT || 8080;

/**
 * Routes
 */
app.get('/', function (req, res) {
    db.query('SELECT * FROM users', function (err, rows) {
        if (!err) {
            res.status(200).send(rows)
        }
    });
});

app.get('/users', function (req, res) {
    db.query('SELECT COUNT(*) FROM users', function (err, rows) {
        if (!err) {
            res.status(200).send(rows)
        }
    });
});

/**
 * Start the server
 */
app.listen(port);