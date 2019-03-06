const mongoose = require('mongoose');
const Order = require('../../model/orders');



const getOrderById = (request, response, next) => {
  
  Order.findById(request.params.id, function (err, order) {
    if (err) return next(err);
    response.send( {
             status : "success",
             order
            });
})
};
 
module.exports = getOrderById;