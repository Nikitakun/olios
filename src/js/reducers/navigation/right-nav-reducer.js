import actions from '../../actions/action-constants';

export default function rightNavReducer(state = false, action) {


	switch(action.type) {
		case actions.TOGGLE_RIGHT_NAV:
			return !state;

		default:
			return state;
	}
}