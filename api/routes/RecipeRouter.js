const Router = require('express').Router()
const controller = require('../controllers/RecipeController')

Router.get('/', controller.GetAllRecipes)
//Router.get('/:recipe_id', controller.GetIndividualRecipe)
Router.post('/:user_id', controller.CreateNewRecipe)
Router.put('/:recipe_id', controller.UpdateRecipe)
Router.delete('/:recipe_id', controller.DeleteRecipe)

Router.get('/:recipe_id', controller.getRecipeAndAffiliation)

module.exports = Router