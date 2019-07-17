import * as types from './actionTypes'
import { findResult } from './result'

export const setQuery = data => dispatch => dispatch(findResult(data))

export const storeQuery = data => {
	return {
		type: types.SET_QUERY,
		data
	}
}
