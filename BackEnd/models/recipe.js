var mongoose = require('mongoose');


var recipe = mongoose.Schema({
  title: {type: String},
  ingredients: {type: String},
  instructions: {type: String},
  difficulty: {type: Number},
  time: {type: Number}
});


var Recipe = mongoose.model('Recipe', recipe);


module.exports = Recipe;
