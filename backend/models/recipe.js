const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: String, required: true },
  time_to_prepare: { type: Number, required: true },
  instructions: { type: String, required: true },
  difficulty: { type: Number, max: 5, min: 1, required: true }
});

module.exports = mongoose.model("Recipe", recipeSchema);
