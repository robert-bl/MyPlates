const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetUserProfiles)
Router.get('/:user_id', controller.GetIndividualUserProfile)
Router.post('/', controller.CreateNewUser)
Router.delete('/:user_id', controller.DeleteAccount)
Router.put('/:user_id', controller.UpdateAccount)




module.exports = Router
