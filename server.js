'use strict';
const express = require('express');
const app = express();

// TODO: Move these into a .env file
const PORT = 8000;
const HOST = '0.0.0.0';

var knex = require('knex')({
    client: 'mysql',
    connection: {
        debug: true,
        host : HOST,
        user : 'default_user',
        password : 'secret',
        database : 'default_database'
    }
  });

// Routes
app.get('/', function(req, res) {
    console.log("Received a GET request to /");
    res.send("OK");
});



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
