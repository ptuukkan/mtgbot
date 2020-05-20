const mtgRouter = require('express').Router()

mtgRouter.post('/', async (request, response) => {
	console.log(request.body)
	response.send('jepa')
})

mtgRouter.get('/', async (request, response) => {
	response.send('jejeje')
})

module.exports = mtgRouter
