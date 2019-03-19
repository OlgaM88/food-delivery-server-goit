const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    username: String,
    telephone: String,
    password: {
        type: String,
        required: true,
    },
    email: { type: String,
             lowercase: true,
             unique: true,
             sparse: true,
    },
    favoriteProducts: Array,
    viewedProducts: Array, 
    orders: Array
});

module.exports = mongoose.model('User', userSchema);