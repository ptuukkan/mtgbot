import axios from 'axios';
const baseUrl = 'https://api.scryfall.com/cards/named?fuzzy=';

export const searchCard = async (cardName) => {
	const response = await axios.get(`${baseUrl}${cardName}`);
	return response.data;
};
