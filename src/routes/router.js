const express = require('express');
const mainRoute = require('./main/main');
const productsCtrl = require('./products/products');
const createUser = require('./users/create-user');
const getUserById = require('./users/get-user');
const login = require('./authenticate/login');
const logout = require('./authenticate/logout');
const currentUser = require('./authenticate/current-user');
const updateUser = require('./users/update-user');
const createOrder = require('./orders/create-orders');
const getOrderById = require('./orders/get-order');
const verifyToken = require('../modules/check-token');

  const apiRoutes = express.Router();
   apiRoutes
  .get('/', mainRoute)
 
  .get('/products', productsCtrl.getProducts)
  .get('/products/:id', productsCtrl.getProduct)
  .get('/users/:id', getUserById)
  .get('/orders/:id', getOrderById)

  .post('/auth/login', login)
  .use(verifyToken)
  .get('/auth/logout', logout)
  .get('/auth/сurrent', currentUser)
  .post('/users', createUser)
  .put('/users/:id', updateUser )
  .post('/orders/', createOrder)
 

  module.exports = apiRoutes;