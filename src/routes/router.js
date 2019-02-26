const express = require('express');
const mainRoute = require('./main/main');
const productsCtrl = require('./products/products');
const createOrder = require('./users/create-order');
const createUser = require('./users/create-user');
const getUserById = require('./users/get-user');

const apiRoutes = express.Router();

   apiRoutes
  .get('/', mainRoute)
  .get('/products', productsCtrl.getProducts)
  .get('/products/:id', productsCtrl.getProduct)
  .get('/users/:id', getUserById)
 
  .post('/users', createUser)
  .post('/orders/', createOrder)
 

  module.exports = apiRoutes;