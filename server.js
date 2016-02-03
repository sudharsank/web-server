var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var middleware = require('./middleware.js');

//var middleware = {
//    requireAuthentication: function(req, res, next){
//        console.log("Requires authentication!!!");
//        next();
//    },
//    logger: function(req, res, next){
//        console.log('Request: ' + new Date().toDateString() + " " + req.method + " " + req.originalUrl);
//        next();
//    }
//};

app.use(middleware().logger);
//app.use(middleware.requireAuthentication);

app.get('/about', middleware().requireAuthentication, function(req, res){
    res.end("About Us!!");
})

app.use(express.static('./public'));

app.listen(port, function(){
    console.log("Express Server Started!!!");
});