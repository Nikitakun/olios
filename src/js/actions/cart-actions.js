import actions from './action-constants';

export function toggleCart() {
	return {
		type: actions.TOGGLE_CART
	};
}

export function fillCart(stuff) {

	let key = Math.random();

	stuff['key'] = key;
	return {
		type: actions.FILL_CART,
		stuff
	};
}

export function deleteItemFromCart(key) {
	return {
		type: actions.DELETE_FROM_CART,
		key
	};
}