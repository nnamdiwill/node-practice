var http = require('http');
http.createServer(function(req,res){
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('hello world');
}).listen(3000);

console.log('Server started on localhost:3000;press ctrl-c to terminate....');

//node helloworld.js
