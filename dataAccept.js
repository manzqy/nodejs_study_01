const express = require('express');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
let server = express();
let objMu = multer({dest: './upload/'});
server.use(objMu.any());
server.use('/',function(req, res) {
    console.log(req.files);
    let file = req.files[0];
    let newName = file.path + path.parse(file.originalname).ext;
    console.log(newName);
    fs.rename(file.path, newName, function(err,data) {
        if (err) {
            console.log(err.message);
        } 
    })
})

server.listen(8000);