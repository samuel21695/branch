const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead (200, {"Content-Type": "text/plain" });
  res.write('뛰뛰빵빵 뛰뛰빵빵');
  res.end();
});

server.listen(3500);