const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    username: String,
    telephone: String,
    password: String,
    email: String,
    favoriteProducts: Array,
    viewedProducts: Array, 
    orders: Array
});

module.exports = mongoose.model('User', userSchema);