/**
 * Created by mthom25 on 4/5/16.
 */

var db = require('./database.js');

module.exports = {

    do: function (sql, callback) {

        // Get database connection from pool
        db.getConnection(function (err, connection) {
            if (err) {
                callback(err.message, null);
            }

            // Perform the query
            connection.query(sql, function (err, rows) {
                if (err) {
                    callback(err.message, null);
                }

                if (!err) {
                    callback(null, rows);
                }
            });

            // Release the connection back into the pool
            connection.release();
        });
    }
};
