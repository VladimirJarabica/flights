import * as types from '../actions/actionTypes'

export default (state = {}, action) => {
	switch(action.type) {
		case types.SET_QUERY:
			return Object.assign({}, state.query, action.data)
		default:
			return state
	}
}
