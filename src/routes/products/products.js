const fs = require('fs');
const path = require('path');
const url = require('url');
const qs = require("querystring");

  const products = (request, response) => {
     if (request.method === "GET") {
     const filePath = path.join(__dirname,  "../../db", "products", "/all-products.json");
      console.log(filePath);
   
  
    if (request.url !== "/products" ) {

      fs.readFile(filePath, "utf8", (error, data) => {
        if (error) {
          console.log(error);
        }
      const allProducts = JSON.parse(data);
      console.log(allProducts);
      });
      let selectedProducts = [];
      let selectedProduct;

     
    var pathName = url.parse(request.url).pathname; 
    var id = pathName.split("/");
    var productId = id[2];
    selectedProduct = allProducts.filter(product => Number(productId) === product.id);

   const query = url.parse(request.url).query;  
   

    if (query.ids) {
      const idsItems = query.ids.split(",");
      selectedProducts = allProducts.map(product => idsItems.includes(product.id));
    } else if (query.category) {
      selectedProducts = allProducts.filter(product => product.category === query.category);
    }
    response.writeHead(200, {
      "Content-Type": "application/json"
    });

    const dataResponse = ({
      status: "success",
      product : selectedProduct
    }); 
    console.log(dataResponse);
    response.end(dataResponse);
  }
};
   const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
};
   
  module.exports = products;
