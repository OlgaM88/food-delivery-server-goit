const products = require('../../db/products/all-products.json');

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
}

/*const findProducts = (products) => {
  return products.filter 
}*/
//GET /products - получение списка продуктов

  const getProducts = (req, res) => {
    const ids = req.query.ids;
    const category = req.query.category;
    let result = products;
    if (ids) {
    result = getSomeProductsByIds(ids);
    }
    if(category){
      result = getProductsByCategory(category);
    }
    res.send(result)
  };

  

  //GET /products/:id - получение товара

  const getProduct = (request, response) => {
    console.log(request);
    const id = request.params.id;
    let result = getProductFromDb(id);
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
  
  

  

  
  module.exports = {getProducts, getProduct};