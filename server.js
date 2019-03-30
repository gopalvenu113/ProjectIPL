const http = require('http');
const fetch = require('node-fetch');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    fetch('https://github.com/gopalvenu113/ProjectIPL/blob/master/JSON%20files/matchesTotal.json').then(res => res.json()).then(json => console.log(json))
}).listen(8080);
console.log('server started')