const mongoose = require('mongoose');
const Ingredient = require('../../model/ingredient');

const createIngredients = (request, response, next) => {
    const ingredient = request.body;
    console.log(ingredient);
  const data = { ...ingredient };
  const newIngridient= new Ingredient(data);
  const sendResponse = (ingredient) => {
    console.log(ingredient);

    response.json({
      status: 'success',
      ingredient
    });
  };

  const sendError = () => {
    response.status(400);
    response.json({
      error: 'data was not saved'
    });
  };

  newIngridient.save()
    .then(sendResponse)
    .catch(sendError)

};

module.exports= createIngredients;