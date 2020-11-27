function errorHandler(err, req, res, next) {
    let errors = []
    let statusCode = 500

    if (err.name === 'SequelizeValidationError') {
        statusCode = 400
        err.errors.forEach(e => {
            errors.push(e.message)
        });
    } else if (err.name === 'LOGIN_FAILED') {
        statusCode = 400
        errors.push('Invalid email or password')
    } else if (err.name === 'EMAIL_NOT_UNIQUE') {
        statusCode = 400
        errors.push('Email already registered')
    } else if (err.name === 'AUTHENTICATION_FAILED') {
        statusCode = 401
        errors.push('Failed to Authenticate!')
    } else if (err.name === 'DATA_NOT_FOUND') {
        statusCode = 404
        errors.push('Data Not Found')
    } else {
        errors.push('Internal Server Error')
    }

    res.status(statusCode).json({
        errors
    })
}

module.exports = errorHandler