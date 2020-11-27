const {
    Question
} = require('../models/')
const {
    v4: uuidv4
} = require('uuid')

class QuestionController {
    static async create(req, res, next) {
        const {
            question,
            isActive
        } = req.body
        const createdBy = req.loginUser.email
        const uuid = uuidv4()
        try {
            const newQuestion = await Question.create({
                uuid,
                question,
                createdBy,
                updatedBy: createdBy,
                isActive
            })
            res.status(201).json({
                message: 'Success Create new Question',
                newQuestion
            })
        } catch (err) {
            next(err)
        }
    }

    static async findAll(req, res, next) {
        const {
            page
        } = req.query
        const limit = 10
        const offset = (page - 1) * limit
        try {
            const question = await Question.findAll({
                offset: offset,
                limit: limit
            })
            res.status(200).json({
                question
            })
        } catch (err) {
            next(err)
        }
    }

    static async findByUuid(req, res, next) {
        const {
            uuid
        } = req.params
        try {
            const questionByUuid = await Question.findOne({
                where: {
                    uuid
                }
            })
            if (!questionByUuid) {
                throw {
                    name: 'DATA_NOT_FOUND'
                }
            } else {
                res.status(200).json({
                    questionByUuid
                })
            }
        } catch (err) {
            next(err)
        }
    }

    static async delete(req, res, next) {
        const {
            uuid
        } = req.params
        try {
            const questionByUuid = await Question.findOne({
                where: {
                    uuid
                }
            })
            if (!questionByUuid) {
                throw {
                    name: 'DATA_NOT_FOUND'
                }
            } else {
                const deleteQuestion = await Question.destroy({
                    where: {
                        uuid
                    }
                })
                res.status(200).json({
                    message: 'Success Delete Question!'
                })
            }
        } catch (err) {
            next(err)
        }
    }

    static async update(req, res, next) {
        const {
            uuid
        } = req.params
        const {
            question,
            isActive
        } = req.body
        const updatedBy = req.loginUser.email
        try {
            const questionByUuid = await Question.findOne({
                where: {
                    uuid
                }
            })
            if (!questionByUuid) {
                throw {
                    name: 'DATA_NOT_FOUND'
                }
            } else {
                const updateQuestion = await Question.update({
                    question,
                    updatedBy,
                    isActive
                }, {
                    where: {
                        uuid
                    }
                })
                res.status(200).json({
                    message: 'Success Edit Question!'
                })
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = QuestionController