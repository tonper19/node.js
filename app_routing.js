// Aprende Node.js y Express: Routing
// Estefanía
// to execute: node promise.js
// 2023-03-12

const http = require('http');
const someNobelLaureates = require('./nobel.js');

const serv = http.createServer((req, res) => {
  const {method} = req;  // JS destructuring
  switch(method){
    case 'GET':
      return handleGET(req, res);
    default:
      console.log(`The method ${method} can not be handled by the server`);


  }
});

function handleGET(req, res){
  const path = req.url;

  if (path === '/') {
    res.statusCode = 200;
    res.end('Welcome to my server and API using Node.js');
  } else if (path === '/nobel') {
    res.statusCode = 200;
    res.end(JSON.stringify(someNobelLaureates.nobelLaureates));
  } else {
    res.statusCode = 404;
    res.end('Not found...');  
  }



}

const PORT = 3000;
serv.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
})
