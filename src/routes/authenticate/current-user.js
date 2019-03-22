const jwt = require('jsonwebtoken');
const User = require('../../model/user');
const bcrypt = require('bcrypt');
const app = require('../../modules/app');
const verifyToken = require('../../modules/check-token');


const currentUser = (req, res) => {
  

    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    
    const username = jwt.decode(token).username;
    console.log(username)

User.findOne({username : username}, function(err, user) {
    if (err) return res.status(400).json({message : "Not found"})
    res.send({
        "status": "success", 
        "user": user
       })
  });
  

};
module.exports = currentUser;

