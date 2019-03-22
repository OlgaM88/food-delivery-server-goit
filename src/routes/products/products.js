const products = require('../../db/products/all-products.json');
const helpers = require('./helpers');
const fs = require('fs');
const path = require('path');
const Product = require('../../model/product');
/*
const getProductFromDb = id => {
 return products.find(product => Number(id) === product.id);
};

const getSomeProductsByIds = ids =>{
  const items = ids.replace(/['"]+/g, "").split(",");
     return products.filter(product => {
       return items.find(id => product.id === +id);
});
}

const getProductsByCategory = category => {
  const items = category.replace(/['"]+/g, "").split(",");
  return products.filter(product => product.categories[0] === items[0]);
}*/


//GET /products - получение продуктов

  const getProducts = (req, res) => {
    const ids = req.query.ids;
    const category = req.query.category;
    let result = products;
    if (ids) {
    result = helpers.getSomeProductsByIds(ids);
    }
    if(category){
      result = helpers.getProductsByCategory(category);
    }
    res.send(result)
  };

  

  //GET /products/:id - получение товара

  const getProduct = (request, response) => {
    console.log(request);
    const id = request.params.id;
    let result = helpers.getProductFromDb(id);
    console.log(result);
    if (result){
    response.set("Content-Type", "application/json");
    response.status(200);
    response.json({ product: result });
    }else{
      response.set("Content-Type", "application/json");
      response.status(400);
      response.json({'status': 'no products', 'products': []});
    }
  
    
  };
  const setProducts = (request, response) => {
    
    const filePath = path.join(__dirname,  "../../db", "products", "/all-products.json");
    const content = JSON.parse(fs.readFileSync(filePath, "utf8"));
   
     content.forEach(item => {
     const newProduct = new Product(item);
     newProduct.save()
   })
   
  };
  
  
  
  module.exports = {getProducts, getProduct, setProducts};