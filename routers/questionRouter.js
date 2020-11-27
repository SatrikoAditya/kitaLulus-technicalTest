const router = require('express').Router()
const QuestionController = require('../controllers/QuestionController')
const authentication = require('../middlewares/authentication')

router.use(authentication)

router.post('/', QuestionController.create)
router.get('/', QuestionController.findAll)
router.get('/:uuid', QuestionController.findByUuid)
router.delete('/:uuid', QuestionController.delete)
router.patch('/:uuid', QuestionController.update)

module.exports = router