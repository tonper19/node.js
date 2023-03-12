// Aprende Node.js y Express: Server
// Estefanía
// to execute: node promise.js
// 2023-02-28

const http = require('http');
const server = http.createServer((req, res) => {
  const date = new Date();
  console.log(`New request ${date}`);

  console.log('############');
  console.log('# Request  #');
  console.log('############');

  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);

  console.log('************');
  console.log('* Response *');
  console.log('************');
  console.log(res.statusCode);
  res.end('Hello, world');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}...`);
});