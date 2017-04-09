import actions from '../actions/action-constants';

export default function productReducer(state = ' ', action) {

	switch(action.type) {
		case actions.TOGGLE_PRODUCT:
			return action.product;
		default:
			return state;
	}
}