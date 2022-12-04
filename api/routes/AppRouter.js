const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const RecipeRouter = require('./RecipeRouter')
const ReviewRouter = require('./ReviewRouter')

Router.use('/users', UserRouter)
Router.use('/recipes', RecipeRouter)
Router.use('/reviews', ReviewRouter)

module.exports = Router

