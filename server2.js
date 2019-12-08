const express = require('express');
const querystring = require('querystring');
const server = express();
server.use(function(req, res, next) {
    let str = '';
    req.on('data', function(data) {
        str += data;
    });
    req.on('end', function() {
        req.body = querystring.parse(str);
        next();
    });
})
server.use(function(req, res) {
    console.log(req.body);
    
})
server.listen(8000);
