const mtgRouter = require('express').Router()

mtgRouter.post('/', async (request, response) => {
	console.log(request.body)
})

module.exports = mtgRouter
