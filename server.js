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
        host : "db",
        user : 'default_user',
        password : 'secret',
        database : 'default_database'
    }
  });

// Routes
app.get('/', function(req, res) {
    console.log("Received a GET request to /");
    res.send("/");
});

app.get('/weights', async function(req, res) {
    console.log("Received a GET request to /weights");
    const weights = await knex.select().from('weights');
    res.json(weights);
});



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
