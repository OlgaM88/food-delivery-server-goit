const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = mongoose.Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    text: String, 
    mark: { type: String, enum :['1', '2', '3', '4', '5']},
})
module.exports = mongoose.model('Comment', commentSchema);
