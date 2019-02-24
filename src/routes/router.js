const express = require('express');
const mainRoute = require('./main/main');
const productsCtrl = require('./products/products');
const createOrder = require('./users/create-order');

const apiRoutes = express.Router();

   apiRoutes
  .get('/', mainRoute)
  .get('/products', productsCtrl.getProducts)
  .get('/products/:id', productsCtrl.getProduct)
 
  

  .post('/orders/', createOrder)
 /* .post('/users', productsCtrlcreateUser);*/

  module.exports = apiRoutes;