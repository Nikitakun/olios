import React from 'react';
import {connect} from 'react-redux';
import LeftNavComponent from '../components/navigation/LeftNavComponent';
import RightNavComponent from '../components/navigation/RightNavComponent';
import BurgerIconComponent from '../components/navigation/BurgerIconComponent';
import changeCategory from '../actions/change-category-action';

class AppContentContainer extends React.Component {

	changeCategory(e) {
		let category = e.target.getElementsByTagName('SPAN').textContent;
		this.props.changeCategory(category);
	}

	render() {
		return(
			<div className="app-content">

				<LeftNavComponent />
				<RightNavComponent show={this.props.rightNavToggle} changeCategory={this.changeCategory} />
				<BurgerIconComponent clicked={this.props.burgerIconToggle} />

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
		burgerIconToggle: state.burgerIconToggle
	};
}

function mapDispatchToProps(dispatch) {
	return {
		changeCategory: (category) => {
			dispatch(changeCategory(category));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContentContainer);