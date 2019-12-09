const express = require("express");
const recipeCtrl = require("../controllers/recipe");
const router = express.Router();

router.post("/", recipeCtrl.createRecipe);

router.get("/", recipeCtrl.getAllRecipe);

router.get("/:id", recipeCtrl.getOneRecipe);

router.put("/:id", recipeCtrl.updateOne);

router.delete("/:id", recipeCtrl.deleteOne);

module.exports = router;
