const http = require('http');

//event emitters
//streams
//clusers for scaling

const server = http.createServer();


server.on('request', (req, res) => {
    res.write("Hello Node\n");


    res.end();

});

server.listen(8080);