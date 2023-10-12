const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead (200, {"Content-Type": "text/plain" });
  res.write('향마루 똥띵땅똥또옹똥똥띵땅띵똥 삥삥삥빵삥뽀옹빵삥삥삥빵삥뽕');
  res.end();
});

server.listen(3500);