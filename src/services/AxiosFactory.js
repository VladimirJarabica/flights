import axios from 'axios/index';

export default axios.create({
	baseURL: 'https://api.skypicker.com/flights',
	timeout: 10000,
});
