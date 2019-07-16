import * as types from './actionTypes';

export const setQuery = data => {
	return {
		type: types.SET_QUERY,
		data
	};
};
