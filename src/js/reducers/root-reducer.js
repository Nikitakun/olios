import {combineReducers} from 'redux';
import rightNavToggle from './navigation/right-nav-reducer';
import burgerIconToggle from './navigation/burger-icon-reducer';
import {categoryChangeReducer, squeezeCategoriesReducer} from './categories-reducer';

export default combineReducers(
	{
		rightNavToggle,
		burgerIconToggle,
		categoryChange: categoryChangeReducer,
		squeezeCategories: squeezeCategoriesReducer
	}
);