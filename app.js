require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./routers/')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(router)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is runing on PORT ${PORT}`)
})
