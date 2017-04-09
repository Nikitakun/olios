import actions from './action-constants';
import {products} from '../mock-files/existing-stuff';

export default function searchProduct(query) {

	query = query.toLowerCase().replace(/\s/g, '-');

	let results = [];

	let productNames = Object.keys(products);

	productNames.forEach((product) => {
		if (product.indexOf(query) !== -1) {
			results.push(product);
		}
	});

	return {
		type: actions.SEARCH_PRODUCT,
		results
	};

}