//create web server
//create a web server that listens to the port 3000
//and sends a response of "Hello World" for every request it receives
//create a web server that listens to the port 3000
//and sends a response of "Hello World" for every request it receives
const http = require('http');
const server = http.createServer((req, res) => {
  res.end("Hello World");
});
server.listen(3000);

