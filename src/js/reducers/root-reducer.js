import {combineReducers} from 'redux';
import rightNavToggle from './navigation/right-nav-reducer';
import burgerIconToggle from './navigation/burger-icon-reducer';
import {categoriesReducer, squeezeCategoriesReducer} from './categories-reducer';
import productReducer from './product-reducer';
import searchReducer from './search-reducer';

export default combineReducers(
	{
		rightNavToggle,
		burgerIconToggle,
		categoryChange: categoriesReducer,
		squeezeCategories: squeezeCategoriesReducer,
		productChange: productReducer,
		searchResults: searchReducer
	}
);