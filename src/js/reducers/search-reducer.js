import actions from '../actions/action-constants';

export default function searchReducer(state = [], action) {

	switch(action.type) {
		case actions.SEARCH_PRODUCT:
			return action.results;
		default:
			return state;
	}

}