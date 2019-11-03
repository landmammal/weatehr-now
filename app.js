const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.render('home.html');
});

app.listen(3000, function(){
    console.log("Server is live on port: 3000");
});