const mongoose = require('mongoose');
const User = require('../../model/user');

const updateUser =  (request, response, next) => {
   
    User.findByIdAndUpdate(request.params.id, request.body).then(() => {
        User.findOne({_id: request.params.id}).then((err, user) => {
            if (err) return next(err);
            response.send({
            "status": "success", 
            "user": user
           })
        }).catch(next);
        
    });
};
 module.exports = updateUser;