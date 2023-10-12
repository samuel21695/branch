const http = require('http');

const server = http.createServer((req, res) => {

});

server.listen(3500, (err) => {
  if (!err) {
    console.error ('server is not working')
  } else {
    console.error ('successfully working on port 3500 http://localhost:3500')
  }
})