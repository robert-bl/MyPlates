const { Recipe, User } = require('../models')
const middleware = require('../middleware')

const GetUserProfiles = async (req, res) =>{ 
    try{
        const users = await User.findAll()
        res.send(users)
    } catch (error){
        throw error
    }
}


const GetIndividualUserProfile = async (req, res) => {
    try {
      const users = await User.findByPk(req.params.user_id
      )
      res.send(users)
    } catch (error) {
      throw error
    }
  }

  const CreateNewUser = async (req, res) => {
    try {
      
    const {username, password } = req.body
    let passwordDigest = await middleware.hashPassword(password)


    const user = await User.create(
      { username:username, password:passwordDigest,}
     
    )
    res.send(user)

    } catch (error) {
      throw error
    }
  }

  const DeleteAccount = async (req, res) => {
    try {
      let userId = (req.params.user_id)
      await User.destroy({where:{id:userId}})
      res.send({message:`Deleted account with an id of ${userId}`})
    } catch (error) {
      throw error
    }
  }


  const UpdateAccount = async (req, res) => {
    try {
      let userId = parseInt(req.params.user_id)
      let updatedAccount = await User.update(req.body, {where:{id: userId}, returning: true})
      res.send(updatedAccount)
    } catch (error) {
      throw error
    }
  }

  const GetUserAndRecipes = async (req, res) => {
    try {
        const userAndRecipe = await User.findByPk(req.params.user_id, {
        include: [{ model: Recipe, as: 'recipe' }]
        })
        res.send(userAndRecipe)
    } catch (error) {
        throw error
    }
}


//Auth Controllers


// const Register = async (req, res) => {
//   try {
//     const { username, password } = req.body
//     //check password vs passwordDigest vs undPassword
//     let passwordDigest = await middleware.hashPassword(password)
//     const user = await User.create({username, passwordDigest})
//     res.send(user)
//   } catch (error) {
//     throw error
//   }
// }

const Register = async (req, res) => {
  try {
    const { username, undPassword } = req.body
    //check password vs passwordDigest vs undPassword
    let password = await middleware.hashPassword(undPassword)
    const user = await User.create({username, password})
    res.send(user)
  } catch (error) {
    throw error
  }
}

// const Login = async (req, res) => {
//   try {
//     const user = await User.findOne({
//       where: {username : req.body.username},
//       raw: true
//     })
//     if (
//       user &&
//       //check password vs passwordDigest vs undPassword
//       middleware.comparePassword(user.passwordDigest, req.body.password)
//     ) {
//       let payload = {
//         id: user.id,
        
//       }
//       let token = middleware.createToken(payload)
//       return res.send({
//         user: payload, token
//       })
//     }
//     res.status(401).send({
//       status: 'error',
//       msg: 'unauthorized, login'
//     })
//   } catch (error) {
//     throw error
//   }
// }

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {username : req.body.username},
      raw: true
    })
    if (
      user &&
      //check password vs passwordDigest vs undPassword
      middleware.comparePassword(user.password, req.body.undPassword)
    ) {
      let payload = {
        id: user.id,
        username: user.username
      }
      let token = middleware.createToken(payload)
      return res.send({
        user: payload, token
      })
    }
    res.status(401).send({
      status: 'error',
      msg: 'unauthorized, login'
    })
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

  
module.exports= {
    GetUserProfiles,
    GetIndividualUserProfile,
    CreateNewUser,
    DeleteAccount,
    UpdateAccount,
    GetUserAndRecipes,
    Login,
    Register,
    CheckSession
  }