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

const createOrder = (req, res) => {
  const order = req.body;
  const user = req.body.user;
  const orderProducts = req.body.products;
  
  let selectedProducts = findProducts(orderProducts);
  console.log(selectedProducts);

  const fileName = user;
  const userFolder = path.join(__dirname, '../../', `db/users/${fileName}`);

  fs.mkdir(userFolder, { recursive: true }, (err) => {
    if (err) throw err;
  });
  const userOrderFolder = path.join(__dirname, '../../', `db/users/${fileName}/order`);

  fs.mkdir(userOrderFolder, { recursive: true }, (err) => {
    if (err) throw err;
  });

  const src = path.resolve(userOrderFolder, fileName + '.json');
  let newOrder = {
    ...order, id : Math.random().toString(36).slice(-7)
  };
  console.log(newOrder);
  fs.writeFile(src, JSON.stringify(newOrder));


  const sendResponse = () => {
    res.json({
      status: 'success',
      order: newOrder
  });
};

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(sendResponse());
};

 module.exports = createOrder;