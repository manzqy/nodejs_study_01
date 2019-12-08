const express = require('express');
const jade = require('jade');
let html = jade.renderFile('./view/1.jade', {pretty:true,name:'yop'});
console.log(html);
