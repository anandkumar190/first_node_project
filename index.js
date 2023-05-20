

const http = require('node:http');




const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World! i love programming \n');
});



server.listen(port, hostname, () => {
  console.log(`my Local Server running at http://${hostname}:${port}/`);
});











