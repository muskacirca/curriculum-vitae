#!/bin/env node
import express from 'express'
import path from 'path'

const server_port = process.env.PORT || 3000;

var app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../src/frontend/index.html"));
})

app.use('/style', express.static(path.resolve(__dirname, '../src/style')));
app.use('/utils', express.static(path.resolve(__dirname, '../src/utils')));
app.use('/data', express.static(path.resolve(__dirname, '../src/data')));

app.get('/bundle.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../src/frontend/public/bundle.js"));
});

app.listen(server_port, (err) => {
    if(err) return console.log(err)
    console.log('Server is now running on port ' + server_port);
});


