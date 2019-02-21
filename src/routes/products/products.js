const fs = require('fs');
const path = require('path');
const url = require('url');
const qs = require("querystring");

 
  const products = (request, response) =>{

     if (request.method === "GET") {
     const filePath = path.join(__dirname,  "../../db", "products", "/all-products.json");
     fs.readFile(filePath, "utf8", (error, data) => {
        if (error) {
          console.log(error);
        }
      const allProducts = JSON.parse(data);
      
      let status="success";
      let result;
      let selectedProducts = [];
    
      var pathName = url.parse(request.url).pathname; 
      // get id localhost:3001/products/19112835
      var id = pathName.split("/");
      var productId = id[2];  
      console.log(productId);
      selectedProducts = allProducts.filter(product => Number(productId) === product.id);
     
     const query =  url.parse(request.url, true).query;  
     console.log(query.category);
    
     if (query.category){
     const items = query.category.replace(/['"]+/g, "").split(",");
     selectedProducts = allProducts.filter(product => product.categories[0] === items[0]);
     }else if (query.ids){
     const items = query.ids.replace(/['"]+/g, "").split(",");
     selectedProducts=allProducts.filter(product => {
       return items.find(id => product.id === +id);
        }
    );
  };
  
  if (selectedProducts.length < 0 &&  productId === undefined){
      status = "no products";
  }
    result = ({
      status: `${status}`,
      product : selectedProducts
    }); 
    response.writeHead(200, { "Content-Type": "application/json" });
    console.log(result);
    response.end(JSON.stringify(result));
  });

  
};
};  
  module.exports = products;
