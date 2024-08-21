import axios from 'axios';

const BASE = 'https://jsearch.p.rapidapi.com';

const options = {
	method: 'GET',
	params: {
		page: '1',
	},
	headers: {
		'x-rapidapi-key': '016b3971f7msh872f7283016da99p11fc4djsn6810cbd53a37',
		'x-rapidapi-host': 'jsearch.p.rapidapi.com',
	},
};

export const ApiService = {
	async fetch(params) {
		try {
			const response = await axios.get(`${BASE}/${params}`, options);
			return response;
		} catch (error) {
			console.error(error);
		}
	},
};
