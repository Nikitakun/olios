import React from 'react';
import {connect} from 'react-redux';
import LeftNavComponent from '../components/navigation/LeftNavComponent';
import RightNavComponent from '../components/navigation/RightNavComponent';
import BurgerIconComponent from '../components/navigation/BurgerIconComponent';
import changeCategory from '../actions/change-category-action';
import toggleRightNav from '../actions/toggle-right-nav-action';
import { toggleCart, deleteItemFromCart } from '../actions/cart-actions';

class AppContentContainer extends React.Component {

	changeCategory(e) {
		let category = e.target.getElementsByTagName('SPAN').textContent;
		this.props.changeCategory(category);
	}

	render() {
		return(
			<div className="app-content">

				<LeftNavComponent items={this.props.cartReducer.items} show={this.props.cartReducer.show} deleteItem={this.props.deleteItemFromCart} toggleCart={this.props.toggleCart} />
				<RightNavComponent show={this.props.rightNavToggle} changeCategory={this.changeCategory} />
				<BurgerIconComponent clicked={this.props.burgerIconToggle} toggleRightNav={this.props.toggleRightNav} />

				<main className="main-content">
					{this.props.children}
				</main>

			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		rightNavToggle: state.rightNavToggle,
		burgerIconToggle: state.burgerIconToggle,
		cartReducer: state.cartReducer
	};
}

function mapDispatchToProps(dispatch) {
	return {
		changeCategory: (category) => {
			dispatch(changeCategory(category));
		},
		toggleRightNav: () => {
			dispatch(toggleRightNav());
		},
		toggleCart: () => {
			dispatch(toggleCart());
		},
		deleteItemFromCart: (key) => {
			dispatch(deleteItemFromCart(key));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentContainer);