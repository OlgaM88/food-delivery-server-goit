const path = require('path');
const url = require('url');

const users = require('../../db/users/all-users.json');


const getUserFromDb = id => {
    return users.find(user => id === user.id);
   };

   const getUserById = (request, response) => {
    var pathName = url.parse(request.url).pathname; 
    var id = pathName.split("/");
    var userId = id[2];  
   
   /* console.log(request);
    const id = request.params.id;*/
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