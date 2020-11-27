const {
    User
} = require('../models/')
const {
    verifyToken
} = require('../helpers/jwt')

async function authentication(req, res, next) {
    try {
        const {
            token
        } = req.headers
        if (!token) {
            throw {
                name: 'AUTHENTICATION_FAILED'
            }
        } else {
            const decode = verifyToken(token)
            const find = await User.findOne({
                where: {
                    email: decode.email
                }
            })
            if (!find) {
                throw {
                    name: 'AUTHENTICATION_FAILED'
                }
            } else {
                req.loginUser = decode
                next()
            }
        }
    } catch (err) {
        next(err)
    }
}

module.exports = authentication