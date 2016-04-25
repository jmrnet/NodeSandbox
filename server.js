var restify = require('restify');

//------------------------------------------------------------
function listEnvironmentVariables (req, res, next) {
    try {
        res.send(process.env);    
    } 
    catch (e) {
        console.log(e);
    }
        
    next();
}





//------------------------------------------------------------
var server = restify.createServer();
server.use(restify.bodyParser({ mapParams: false }));

//routes
server.get('/', function (req, res, next) {
    res.send('You are here.');
    next();
});

server.get('/env', listEnvironmentVariables);



var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('%s listening at %s', server.name, server.url);
});