const express = require('express')
const app = express()
const cors = require('cors')
const mtgRouter = require('./controllers/mtg')

app.use(cors())
app.use(express.json())

app.use('/api/mtg', mtgRouter)

module.exports = app
