const ejs = require('ejs');
ejs.renderFile('./view/1.ejs', {name: 'kkl'},function(err,data) {
    if (err) {
        console.log(err.message);
        
    } else {
        console.log(data);
        
    }
});
