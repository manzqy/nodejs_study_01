const express = require('express');
const consolidate = require('consolidate');
let server = express();
server.set('view engine', 'html');
server.set('views', './view');
server.engine('html', consolidate.ejs);
server.get('/index', function(req, res) {
    res.render('1.ejs', {name: 'jack'})
})
server.listen(8080);