const bcrypt = require('bcrypt')

function hashpass(password) {
    let salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

function comparePass(password, hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = {
    hashpass,
    comparePass
}