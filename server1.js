const express = require('express');
const expressStatic = require('express-static');
const bodyParser = require('body-parser');
const server = express();

server.use('/', function(req, res, next) {
    console.log('a');
    next();
})
server.use('/', function(req, res, next) {
    console.log('b');
    next();
})
server.listen(8000);