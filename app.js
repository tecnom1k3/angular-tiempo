var restify = require('restify');
var server = restify.createServer();

server.get(/.*/, restify.serveStatic({
    'directory' : './public/',
    'default' : 'index.html'
}));

server.listen(process.env.PORT, function(){
    console.log('Listening from ' + process.env.PORT);
});