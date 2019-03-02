const mongoose = require('mongoose');

const fs = require('fs');
const path = require('path');
const util = require('util');
const User = require('../../model/user');



const createUser = (request, response, next) => {
 const newUser = {
   _id: new mongoose.Types.ObjectId,
   username : request.body.username,
   telephone : request.body.telephone,
   password: request.body.password,
   email: request.body.email,
 }

   newUser.save().then((result) => {
  console.log(result);
   }).catch(err => {
     console.log(err)
   })
   res.status(201).json({
     status:sucess,
     user: newUser
   })

};

module.exports = createUser;