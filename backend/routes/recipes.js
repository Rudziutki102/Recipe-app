import express from "express";
import { getRecipes, getRecipeById } from "../db.js";
const router = express.Router();

// getting all recipes
router.get("/recipes", async (req, res, next) => {
  const recipes = await getRecipes();
  if (recipes) {
    res.status(200).send(recipes);
  } else {
    next("eldorado");
  }
});
// getting specific recipe by ID
router.get("/recipe/:id", async (req, res) => {
  const { id } = req.params;
  const recipe = await getRecipeById(id);
  res.send({
    id,
    recipe,
  });
});
//update specific recipe
router.post("/recipe", (req, res) => {
  console.log("recipe");
  res.send({
    type: "POST",
    added: true,
  });
});

export default router;
