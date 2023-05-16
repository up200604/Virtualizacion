const http = require('http');

const server = http.createServer(function (req, res){
    res.writeHead(200);

    res.end('Hola mundo');
});

server.listen(3000, '127.0.0.1', function(){
    console.log('Server on port 3000');
});