const mongoose = require('mongoose');

const ingredientSchema = mongoose.Schema({
    name: String,
    description: String
   })

   module.exports = mongoose.model('Ingredient', ingredientSchema);