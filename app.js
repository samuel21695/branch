const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead (200, {"Content-Type": "text/plain" });
  res.write('일부러 충돌시키기');
  res.end();
});

server.listen(3500);