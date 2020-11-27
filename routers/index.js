const router = require('express').Router()
const userRouter = require('./userRouter')
const questionRouter = require('./questionRouter')

router.use('/', userRouter)
router.use('/questions', questionRouter)

module.exports = router