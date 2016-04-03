/**
 * Created by mthomas on 4/3/16.
 */

var express = require('express');
var app     = express();
var port    = process.env.PORT || 8080;

/**
 * Routes
 */
app.get('/', function (req, res) {
    res.status(200).send('Welcome');
});

/**
 * Start the server
 */
app.listen(port);