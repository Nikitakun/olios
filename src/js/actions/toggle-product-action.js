import actions from './action-constants';
import {products} from '../mock-files/existing-stuff';

export default function toggleProduct(product) {

	if (!products[product]) product = ' ';

	return {
		type: actions.TOGGLE_PRODUCT,
		product
	};
}