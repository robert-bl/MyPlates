const { Recipe, User, Review } = require('../models')


  // Route: (post) /api/recipes/:user_id
  const CreateNewRecipe = async (req, res) => {
    try {
      
    let userId = req.params.user_id
    let body = req.body

    const recipe = await Recipe.create(
    { userId, ...body }
  
    )
    res.send(recipe)

    } catch (error) {
      throw error
    }
  }

   // Route: (delete) /api/recipes/:recipe_id
  const DeleteRecipe = async (req, res) => {
    try {
      let recipeId = (req.params.recipe_id)
      await Recipe.destroy({where:{id:recipeId}})
      res.send({message:`Deleted recipe with an id of ${recipeId}`})
    } catch (error) {
      throw error
    }
  }

  // Route: (put) /api/recipes/:recipe_id
  const UpdateRecipe = async (req, res) => {
    try {
      let recipeId = parseInt(req.params.recipe_id)
      let updatedRecipe = await Recipe.update(req.body, {where:{id: recipeId}, returning: true})
      res.send(updatedRecipe)
    } catch (error) {
      throw error
    }
  }
// Route: (get) /api/recipes/:recipe_id
  const getRecipeAndAffiliation = async (req, res) => {
    try {
        const recipeAndAffiliation = await Recipe.findByPk(req.params.recipe_id, {
        include: [{ model: User, as: 'user' }]
        })
        res.send(recipeAndAffiliation)
    } catch (error) {
        throw error
    }
}

// Route: (get) /api/recipes
const GetAllRecipesAndAffiliation = async (req, res) =>{ 
  try{
      const recipes = await Recipe.findAll({
        include:[{model:User, as:'user'}]
      })
      res.send(recipes)
  } catch (error){
      throw error
  }
}


  
module.exports= {
   
    CreateNewRecipe,
    UpdateRecipe,
    DeleteRecipe,
    getRecipeAndAffiliation,
    GetAllRecipesAndAffiliation
  }