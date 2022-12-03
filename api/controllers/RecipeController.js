const { Recipe } = require('../models')

const GetAllRecipes = async (req, res) =>{ 
    try{
        const recipes = await Recipe.findAll()
        res.send(recipes)
    } catch (error){
        throw error
    }
}


const GetIndividualRecipe = async (req, res) => {
    try {
      const recipe = await Recipe.findByPk(req.params.recipe_id
      )
      res.send(recipe)
    } catch (error) {
      throw error
    }
  }

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

  const DeleteRecipe = async (req, res) => {
    try {
      let recipeId = (req.params.recipe_id)
      await Recipe.destroy({where:{id:recipeId}})
      res.send({message:`Deleted recipe with an id of ${recipeId}`})
    } catch (error) {
      throw error
    }
  }


  const UpdateRecipe = async (req, res) => {
    try {
      let recipeId = parseInt(req.params.recipe_id)
      let updatedRecipe = await Recipe.update(req.body, {where:{id: recipeId}, returning: true})
      res.send(updatedRecipe)
    } catch (error) {
      throw error
    }
  }




  
module.exports= {
    GetAllRecipes,
    GetIndividualRecipe,
    CreateNewRecipe,
    UpdateRecipe,
    DeleteRecipe

   
  }