const mongoose = require('mongoose');
const User = require('../../model/user');



const createUser = (request, response, next) => {
  const user = request.body;
  const userData = { ...user, _id: new mongoose.Types.ObjectId  };

  const newUser = new User(userData);
  const sendResponse = (user) => {
    console.log(user);

    response.json({
      status: 'success',
      user
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'user was not saved'
    });
  };

  newUser.save()
    .then(sendResponse)
    .catch(sendError)

};
module.exports = createUser;