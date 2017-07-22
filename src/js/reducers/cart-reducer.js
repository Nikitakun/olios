import actions from '../actions/action-constants';

export default function cartReducer(state = {show: false, items: []}, action) {

	switch(action.type) {
		case actions.TOGGLE_CART:
			return Object.assign({}, state, {show: !state.show});
		case actions.FILL_CART:
			let newItems = state.items.slice();
			newItems.push(action.stuff);
			return Object.assign({}, state, {items: newItems});
		case actions.DELETE_FROM_CART:
			let itemToDeleteIndex;
			state.items.forEach((item, index) => {
				if (item.key === action.key) {
					itemToDeleteIndex = index;
				}
			});
			let superNewItems = state.items.slice();
			superNewItems.splice(itemToDeleteIndex, 1);
			return Object.assign({}, state, {items: superNewItems});
		default:
			return state;
	}

}