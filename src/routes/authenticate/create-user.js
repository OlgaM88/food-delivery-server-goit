const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../../model/user');


const createUser = (request, response, next) => {

  const { username, telephone, favoriteProducts,viewedProducts, orders, email, password } = request.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  User.findOne({email: email}, (err, existingUser) => {
if (err){
  return response.status(500).json(err);
}else if (existingUser){
    return response.status(422).json('Email address is already registered')
}else {
  const newUser = new User({
    _id: new mongoose.Types.ObjectId,
    username,
    telephone,
    email,
    favoriteProducts,
    viewedProducts, 
    orders,
    password: hashedPassword
  });
  
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

}
  })

 
};
module.exports = createUser;