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

   module.exports = {getProductFromDb, getSomeProductsByIds, getProductsByCategory  }