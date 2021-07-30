import { getMtgCard } from '../mtg.js';
import express from 'express';

const mtgRouter = express.Router();

mtgRouter.post('/', async (request, response) => {
	try {
		const image = await getMtgCard(request.body);
		response.json({
			response_type: 'in_channel',
			attachments: [
				{
					image_url: image,
				},
			],
		});
	} catch (error) {
		if (error.response?.data?.details) {
			response.send(error.response.data.details);
		} else if (error.message) {
			response.send(error.message);
		} else {
			response.send('error');
		}
	}
});

export default mtgRouter;
