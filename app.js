/**
 * Created by mthomas on 4/3/16.
 */

var express = require('express');
var app     = express();
var port    = process.env.PORT || 8080;
var query   = require('./lib/query.js');

/**
 * Routes
 */
app.get('/', function (req, res) {

    var sql = 'SELECT * FROM users';

    query.do(sql, function (err, rows) {
        if (err) {
            res.status(501).send('Database error: ' + err);
        }
        if (!err) {
            res.status(200).send(rows)
        }
    });
});

app.get('/users', function (req, res) {

    var sql = 'SELECT COUNT(*) as count FROM users';

    query.do(sql, function (err, rows) {
        if (err) {
            res.status(501).send('Database error: ' + err);
        }
        if (!err) {
            res.status(200).send(rows[0])
        }
    });
});

/**
 * Start the server
 */
app.listen(port);
