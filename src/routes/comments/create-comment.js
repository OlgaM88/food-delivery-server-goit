const mongoose = require('mongoose');

const Comment = require('../../model/comment');


const createComment = (request, response, next) => {

 const comment = request.body;
   
  const data = { ...comment };
  const newComment = new Comment(data);
  
  console.log(newComment)
  const sendResponse = (comment) => {
    response.json({
      status: 'success',
      comment
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'comment was not saved'
    });
  };
 
  newComment.save()
  .then(sendResponse)
  .catch(sendError)
};
module.exports = createComment;