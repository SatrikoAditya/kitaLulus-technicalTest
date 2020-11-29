const {
    User
} = require('../models/')
const {
    comparePass
} = require('../helpers/bcrypt')
const {
    generateToken
} = require('../helpers/jwt')

class UserController {
    static async register(req, res, next) {
        let {
            email,
            password
        } = req.body
        try {
            const uniqueValidationMail = await User.findOne({
                where: {
                    email
                }
            })
            if (uniqueValidationMail) {
                throw {
                    name: 'EMAIL_NOT_UNIQUE'
                }
            } else {
                const user = await User.create({
                    email,
                    password
                })
                res.status(201).json({
                    message: 'Register Success!',
                    email: user.email
                })
            }
        } catch (err) {
            next(err)
        }
    }

    static async login(req, res, next) {
        const {
            email,
            password
        } = req.body
        try {
            const user = await User.findOne({
                where: {
                    email
                }
            })
            if (!user) {
                throw {
                    name: 'LOGIN_FAILED'
                }
            } else {
                let comparePassword = comparePass(password, user.password)
                if (!comparePassword) {
                    throw {
                        name: 'LOGIN_FAILED'
                    }
                } else {
                    let payload = {
                        id: user.id,
                        email: user.email
                    }
                    let token = generateToken(payload)
                    res.status(200).json({
                        message: 'Login Success!',
                        id: user.id,
                        email: user.email,
                        token
                    })
                }
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController
