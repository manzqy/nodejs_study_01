const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const server = express();
server.use(cookieParser('uakwkbcw'));
server.use(cookieSession({
    name: 'yu',
    keys: ['aaa','bbb','ccc']
}));
server.use('/aaa/a.html', function(req, res) {
    req.secret = 'uakwkbcw';
    res.cookie('user','kkl',{signed:true});
    // console.log(req.signedCookies);
    // console.log(req.cookies);
    if (req.session['count'] == null) {
        req.session['count'] = 1;
    } else {
        req.session['count']++;
    }
    console.log(req.session['count']);
    
    res.send('ok');
    res.end();
})
server.listen(8000);