const express = require('express');
const expressStatic = require('express-static');
const bodyParser = require('body-parser');
const server = express();
let userData = {
    jack: '123',
    mike: '123',
    rose: '123'
}
server.use(bodyParser.urlencoded({}));
server.use('/login',function(req,res) {
    console.log(req.body);
    
})
server.use(expressStatic('./www'));
server.listen(8000);