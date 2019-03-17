const jwt = require('jsonwebtoken');
const User = require('../../model/user');
const bcrypt = require('bcrypt');
const app = require('../../modules/app');
const verifyToken = require('../../modules/check-token');


const currentUser = (req, res) => {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    const userId = jwt.decode(token).userId;

User.findOne(userId, function(err, user) {
    req.user = user;
  });

};
module.exports = currentUser;

