const Router = require('express').Router()
const controller = require('../controllers/ReviewController')

Router.get('/', controller.GetAllReviews)
Router.get('/:review_id', controller.GetIndividualReview)
Router.get('/by-recipe/:recipe_id', controller.GetReviewsByRecipe)
Router.post('/:user_id/:recipe_id', controller.CreateNewReview)
Router.put('/:review_id', controller.UpdateReview)
 Router.delete('/:review_id', controller.DeleteReview)



module.exports = Router