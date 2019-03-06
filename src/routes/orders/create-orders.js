const mongoose = require('mongoose');
const Order = require('../../model/orders');

const createOrders = (request, response, next) => {
    const order = request.body;
    console.log(order);
  const orderData = { ...order, _id: new mongoose.Types.ObjectId };
  const newOrder = new Order(orderData);
  const sendResponse = (order) => {
    console.log(order);

    response.json({
      status: 'success',
      order
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'order was not saved'
    });
  };

  newOrder.save()
    .then(sendResponse)
    .catch(sendError)

};

module.exports= createOrders;