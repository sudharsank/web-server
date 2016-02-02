module.exports = function(){
    return {
        requireAuthentication: function(req, res, next){
            console.log("Requires authentication!!!");
            next();
        },
        logger: function(req, res, next){
            console.log('Request: ' + new Date().toDateString() + " " + req.method + " " + req.originalUrl);
            next();
        }
    }
}