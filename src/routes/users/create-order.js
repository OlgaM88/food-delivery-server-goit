const fs = require('fs');
const path = require('path');
const util = require('util');
var mkdirp = require('mkdirp');
const products = require('../../db/products/all-products.json');



const findProducts = (items) => {
  return products.filter(product =>{
    return items.find(id => product.id === +id);
  })
}


const saveNewOrder = (fileName, data) => {
  const src = path.resolve(usersFolder, fileName + '.json');
  const dataStr = JSON.stringify(data);

  return writeFile(src, dataStr);
};


const createOrder = (req, res) => {
  const order = req.body;
  const user = req.body.user;
  const orderProducts = req.body.products;
  
  let selectedProducts = findProducts(orderProducts);
  console.log(selectedProducts);

  const fileName = user;
  const userFolder = path.join(__dirname, '../../', `db/users/${fileName}/orders`);
  fs.mkdir(userFolder, { recursive: true }, (err) => {
    if (err) throw err;
  });

  const sendResponse = () => {
    res.json({
      status: 'success',
      order: order
  });
};


  const src = path.resolve(userFolder, fileName + '.json');
  const dataStr = JSON.stringify(order);
  console.log(dataStr);
  fs.writeFile(src, dataStr);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(sendResponse());
};


 module.exports = createOrder;