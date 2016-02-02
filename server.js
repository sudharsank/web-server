var express = require('express');
var app = express();

var middleware = {
    requireAuthentication: function(req, res, next){
        console.log("Requires authentication!!!");
        next();
    },
    logger: function(req, res, next){
        console.log('Request: ' + new Date().toDateString() + " " + req.method + " " + req.originalUrl);
        next();
    }
};

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.get('/', function(req, res){
   res.send("Hello Express!!") ;
}).get('/about', middleware.requireAuthentication, function(req, res){
    res.end("About Us!!");
})

app.use(express.static('./public'));

app.listen(3000, function(){
    console.log("Express Server Started!!!");
});