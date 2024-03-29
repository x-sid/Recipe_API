const Recipe = require("../models/recipe");

exports.getAllRecipe = (req, res, next) => {
  Recipe.find()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(400).json({ error: error });
    });
};

exports.createRecipe = (req, res, next) => {
  const recipe = new Recipe({
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    time_to_prepare: req.body.time_to_prepare,
    difficulty: req.body.difficulty
  });
  recipe
    .save()
    .then(() => {
      res.status(200).json({ message: "recipe created successfully" });
    })
    .catch(error => {
      res.status(400).json({ error: error });
    });
};

exports.getOneRecipe = (req, res, next) => {
  Recipe.findOne({ _id: req.params.id })
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(error => {
      res.status(400).json({ error: error });
    });
};

exports.updateOne = (req, res, next) => {
  const recipe = new Recipe({
    _id: req.params.id,
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    time_to_prepare: req.body.time_to_prepare,
    difficulty: req.body.difficulty
  });
  Recipe.updateOne({ _id: req.params.id }, recipe)
    .then(() => {
      res.status(200).json({ message: "recipe updated successfully" });
    })
    .catch(error => {
      res.status(400).json({ error: error });
    });
};

exports.deleteOne = (req, res, next) => {
  Recipe.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: "recipe deleted!" });
    })
    .catch(err => {
      res.status(400).json({ err: err });
    });
};
