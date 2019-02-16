const fs = require('fs');
const path = require('path');


const products = (request, response) => {
   const filePath = path.join(__dirname, '../../db', 'products', 'all-products.json');  
   const data = fs.statSync(filePath);
  
    response.writeHead(200, {
      'Content-Type': 'app/json',
     
    });
  
    const readStream = fs.createReadStream(filePath);
  
    readStream.pipe(response);
  };
  
  module.exports = products;