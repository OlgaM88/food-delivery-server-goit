const jwt = require('jsonwebtoken');
const User = require('../../model/user');
const bcrypt = require('bcrypt');
const app = require('../../modules/app');
const verifyToken = require('../../modules/check-token');

const errorResp = {
    succes: false,
    message: "Authentication failed"
};

const passMatches = (pass, hash) => bcrypt.compareSync(pass, hash);

const generateToken = payload => {
    const sekretKey = app.get('superSecret');

    return jwt.sign(payload, sekretKey, {
        expiresIn : 60 * 60 * 24
    })
};
const login = (req, res) => {
    const { username, password} = req.body;

    User.findOne({ username: req.body.username }, onFind);

    function onFind (err, user){
        if (err) throw err;
        
        const correctPass = passMatches(password, user.password);
        
        if (!user || !correctPass){
            return res.status(400).json({message : errorResp})
        }
        const payload = {
            username, password
        }
        token = generateToken(payload);
       
        res.json({
            success: true,
            message: 'Its your token!',
            token: token,
          })
    }
};
module.exports = login;

