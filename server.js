'use strict';
const express = require('express');
const app = express();

// TODO: Move these into a .env file
const PORT = 8000;
const HOST = '0.0.0.0';

// TODO: move this into its own file
// Database connection:
const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'mysql',
    user     : 'default_user',
    password : 'secret'
});
connection.connect(function(err) {
    
    if(err) {
        res.send('Could not connect to MySQL ' + err.stack);
    } else {
        console.log('Connected to MySQL.');
    }
});

// App:
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

