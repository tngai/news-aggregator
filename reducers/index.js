import { combineReducers } from 'redux';
import { GET_ARTICLES_SUCCESS } from '../actions/actionTypes';

const articles = (state=[], action={}) => {
	switch (action.type) {
		case GET_ARTICLES_SUCCESS:
		console.warn('here', action.paylod);
			return [...action.payload];
		default:
			return state;
	}
};

export default combineReducers({
	articles
});
