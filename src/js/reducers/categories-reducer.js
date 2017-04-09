import actions from '../actions/action-constants';

export function categoriesReducer(state = 'LIVING ROOM', action) {
	switch(action.type) {
		case actions.CHANGE_CATEGORY:
			return action.category;
		default:
			return state;
	}
}

export function squeezeCategoriesReducer(state = false, action) {
	switch(action.type) {
		case actions.TOGGLE_PRODUCT:
			return !state;
		default:
			return state;
	}
}