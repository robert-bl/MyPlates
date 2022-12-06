const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
    // try {
    //     const user = await User.findOne({
    //         where { username: req.body //}
    //     })
    // }
}

const Register = async (req, res) => {
    try {
        const { username, undPassword } = req.body
        let password = await middleware.hashPassword(undPassword)

        const user = await User.create(
            { username, password }
        )

        res.send(user)
    } catch (error) {
        throw error
    }
}