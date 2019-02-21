const https = require('https');
const url = require('url');
const path = require('path');
const morgan = require('morgan');
const router = require('./routes/router');
const logger = morgan("combined");
const fs = require('fs');

const options = {
  key: fs.readFileSync(path.join(__dirname, "./ssl/server.key")),
  cert: fs.readFileSync(path.join(__dirname, "./ssl/server.crt"))
};

const startServer = port => {

  const server = https.createServer(options, (request, response) => {
    
    const parsedUrl = url.parse(request.url, true);
    const pathName = "/" + parsedUrl.pathname.split("/")[1] || "/";
    console.log(pathName);
    const func = router[pathName] || router.default;

    logger(request, response, () => func(request, response));

  });
  server.listen(port);
};

module.exports = startServer;
