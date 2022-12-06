const { Review, User } = require('../models')

const GetAllReviews= async (req, res) =>{ 
    try{
        const reviews = await Review.findAll()
        res.send(reviews)
    } catch (error){
        throw error
    }
}

// (get) api/reviews/by-recipe/:recipe_id
const GetReviewsByRecipe = async (req, res) => {
  try {
    let recipe = parseInt(req.params.recipe_id)
    const reviews = await Review.findAll({
      
      where : {recipeId: recipe},
      include: [{model: User, as:'user', attributes:['username']}]

    }
      
    
      )
    res.send(reviews)
  } catch (error) {
    throw error
  }
}







const GetIndividualReview = async (req, res) => {
    try {
      const review = await Review.findByPk(req.params.review_id, 
        {include: [{model: User, as:'user', attributes:['username']}]}
      )

      

      res.send(review)
    } catch (error) {
      throw error
    }
  }

  const CreateNewReview = async (req, res) => {
    try {
      
    let userId = req.params.user_id
    let recipeId = req.params.recipe_id
    let body = req.body

    const review = await Review.create(
    { userId, recipeId, ...body }
  
    )
    res.send(review)

    } catch (error) {
      throw error
    }
  }

  const DeleteReview = async (req, res) => {
    try {
      let reviewId = (req.params.review_id)
      await Review.destroy({where:{id:reviewId}})
      res.send({message:`Deleted review with an review id of ${reviewId}`})
    } catch (error) {
      throw error
    }
  }


  const UpdateReview = async (req, res) => {
    try {
      let reviewId = parseInt(req.params.review_id)
      let updatedReview = await Review.update(req.body, {where:{id: reviewId}, returning: true})
      res.send(updatedReview)
    } catch (error) {
      throw error
    }
  }




  
module.exports= {
    GetAllReviews,
    GetIndividualReview,
    CreateNewReview,
    DeleteReview,
    UpdateReview,
    GetReviewsByRecipe
    
    

   
  }