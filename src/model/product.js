const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = mongoose.Schema({
    id: Number,
    sku: Number,
    description: String,
    price: String,
    currency: String,
    creatorId: Number,
    created: String,
    modified: String,
    categoiries: Array,
    ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
})
module.exports = mongoose.model('Product', productSchema);
