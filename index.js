const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('<h2>Hello World!</h2>');
});

const  server = app.listen(4000, function(){
    console.log('go to port number 4000');
});