import * as types from './actionTypes';
import axios from '../../services/AxiosFactory';
import moment from 'moment'

export const findResult = (flightData) => {
	return dispatch => {
		dispatch(resultLoading());
		
		let today = new Date();
		// let nextWeek = moment().add(7, 'days').toDate();
		let data = {
			flyFrom: flightData.from ? flightData.from : 'prague_cz',
			to: flightData.to ? flightData.to : 'paris_fr',
			dateFrom: flightData.dateFrom ? moment(flightData.dateFrom).format('DD/MM/YYYY') : today,
			dateTo: flightData.dateTo ? moment(flightData.dateTo).format('DD/MM/YYYY') : today,
			typeFlight: flightData.type ? flightData.type : 'return',
			// returnFrom: flightData.returnFromDate ? moment(flightData.returnFromDate).format('dd/mm/YYYY') : nextWeek,
			// returnTo: flightData.returnToDate ? moment(flightData.returnToDate).format('dd/mm/YYYY') : nextWeek,
			v: 2,
			locale: 'en'
		}
		
		axios
			.get('', { params: data })
			.then(({ data }) => {
				console.log(data)
				dispatch(resultSuccess(data));
			})
			.catch(() => {
				dispatch(resultError('error'));
			});
	}
};

export const resultSuccess = data => {
	return {
		type: types.RESULT_SUCCESS,
		data
	};
};

export const resultError = error => {
	return {
		type: types.RESULT_ERROR,
		error
	};
};

export const resultLoading = () => {
	return {
		type: types.RESULT_LOADING,
	};
};
