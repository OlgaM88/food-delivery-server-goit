const path = require('path');
const url = require('url');
const User = require('../../model/user');

const users = require('../../db/users/all-users.json');


   const getUserById = (request, response) => {
     
    const id = request.params.id;
    let result = getUserFromDb(userId);
    console.log(result);
    if (result){
    response.set("Content-Type", "application/json");
    response.status(200);
    response.json({ user: result });
    }else{
      response.set("Content-Type", "application/json");
      response.status(400);
      response.json({'status': 'no such user'});
    }
  
    
  };
  
  module.exports = getUserById;