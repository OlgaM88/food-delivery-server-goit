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

    const func = router[parsedUrl.pathname] || router.default;

    logger(request, response, () => func(request, response));
/*
    var pathName = url.parse(request.url).pathname;
     
    var id = pathName.split("/");
    console.log(id);
    var  userId = id[2];
    fs.readFile('./src/db/products/all-products.json', "utf8", function (err, data) {
      if (err) {
         return console.error(err);
      }
      const products = JSON.parse(data);
      const productByID = products.filter(product => Number(userId) === product.id);
      const dataResponse = ({
        status: "success",
        product : productByID
      }); 
      console.log(dataResponse);
      response.end(dataResponse);
  });
   */
  });
  server.listen(port);
};

module.exports = startServer;
