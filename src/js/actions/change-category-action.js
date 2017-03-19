import actions from './action-constants';
import {categories} from '../mock-files/existing-stuff';

export default function changeCategory(category) {

	if (!categories[category]) category = ' ';

	return {
		type: actions.CHANGE_CATEGORY,
		category
	};
}