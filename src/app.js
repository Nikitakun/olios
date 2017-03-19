import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './js/reducers/root-reducer';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContentContainer from './js/containers/AppContentContainer';
import HomeContainer from './js/containers/HomeContainer';
import CategoriesContainer from './js/containers/CategoriesContainer';
import ProductContainer from './js/containers/ProductContainer';
import './sass/style.scss';

function requireAll(r) {
	r.keys().forEach(r);
}
requireAll(require.context('./pics/', true));

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={AppContentContainer}>
				<IndexRoute component={HomeContainer} />
				<Route path='/categories/:categoryType/(:product)' component={CategoriesContainer}/>
			</Route>
		</Router>
	</Provider>,
    document.getElementById('app')
);


