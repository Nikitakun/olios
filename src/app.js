import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/root-reducer';
import { Router, Route, browserHistory } from 'react-router';
import AppContentContainer from './js/containers/AppContentContainer';
import HomeComponent from './js/components/main-content/HomeComponent';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={AppContentContainer}>
				<IndexRoute component={HomeComponent} />
				<Route path='/products/:item' component={}/>
			</Route>
		</Router>
	</Provider>,
    document.getElementById('app')
);


