import actions from './action-constants';

export default function changeCategory(category) {
	return {
		type: actions.CHANGE_CATEGORY,
		category
	};
}