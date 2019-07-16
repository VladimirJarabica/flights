import * as types from '../actions/actionTypes';

export default (state = {}, action) => {
	switch(action.type) {
		case types.RESULT_LOADING:
			return {
				...state.result,
				loading: true,
				error: false
			};
		case types.RESULT_SUCCESS:
			return {
				loading: false,
				error: false,
				data: action.data
			};
		case types.RESULT_ERROR:
			return {
				...state.result,
				loading: false,
				error: false
			}
		default:
			return state;
	}
}
