const http = require('http');
const url = require('url');
const path = require('path');
const morgan = require('morgan');
const router = require('./routes/router');
const logger = morgan("combined");
const fs = require('fs');


const startServer = port => {

  const server = http.createServer((request, response) => {
    
    const parsedUrl = url.parse(request.url, true);
    const pathName = "/" + parsedUrl.pathname.split("/")[1] || "/";
    console.log(pathName);
    const func = router[pathName] || router.default;

    logger(request, response, () => func(request, response));

  });
  server.listen(port);
};

module.exports = startServer;
