import { searchCard } from './helper/scryfall.js';

export const getMtgCard = async (body) => {
	if (body.token !== process.env.TOKEN) {
		throw new Error('Token invalid');
	}
	let cardName = body.text;
	if (!cardName || cardName.length < 3) {
		throw new Error('CardName empty or too short');
	}
	cardName = cardName.replace(' ', '+');
	const response = await searchCard(cardName);
	if (response.image_uris?.border_crop) {
		return response.image_uris.border_crop;
	} else throw new Error('No image property');
};
