const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead (200, {"Content-Type": "text/plain" });
  res.write('아뮤곤ㅇ머랴ㅗㅁ듀ㅓㄹㄷ며ㅐㄷㅇㅈㅁ');
  res.end();
});

server.listen(3500);