const Router = require('express').Router()
const controller = require('../controllers/RecipeController')
const middleware = require('../middleware')

Router.get('/', controller.GetAllRecipes)

//Router.get('/:recipe_id', controller.GetIndividualRecipe)
Router.get('/:recipe_id', controller.getRecipeAndAffiliation)

//Auth routes
Router.post('/:user_id',
middleware.stripToken, 
middleware.verifyToken,
controller.CreateNewRecipe)

Router.put('/:recipe_id',
middleware.stripToken, 
middleware.verifyToken,
controller.UpdateRecipe)

Router.delete('/:recipe_id',
middleware.stripToken, 
middleware.verifyToken,
controller.DeleteRecipe)



module.exports = Router