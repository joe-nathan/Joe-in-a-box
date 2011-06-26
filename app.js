var sys = require('sys');
var http = require('http');
var url = require('url');
try {var dispatcher = require('./lib/dispatcher');} catch(err){ console.log( 'Lib error' + err); }

console.log( 'Starting server');
var s = http.createServer(function(req, res){
    try {
    console.log('Request from ' + req.connection.remoteAddress + ' for href ' + url.parse(req.url).href);
    dispatcher.dispatch(req, res);
    } catch (err) {
    sys.puts(err);
    res.writeHead(500);
    res.end('Internal Error');
    }
    });

s.listen(4200, '127.0.0.1', function(){
      console.log( 'Server started at port 4200');
      });

