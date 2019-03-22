const mongoose = require('mongoose');
const Comment = require('../../model/comment');

const getComments = (request, response, next) => {

 let productId = request.query.productId;
 
 Comment.
  find({ product: productId }).
  exec(function (err, comment) {
    if (err)
    response.send({
        "status": "success", 
        "comments": []
    }) ;
    response.send({
        "status": "success", 
        "comments": comment
       })
  });
}

module.exports = getComments;