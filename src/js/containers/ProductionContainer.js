import React from 'react';
import {connect} from 'react-redux';
import CategoryIndicatorComponent from '../components/main-content/production-wrapper-content/CategoryIndicatorComponent';
import CategoriesComponent from '../components/main-content/production-wrapper-content/CategoriesComponent';

class ProductionContainer extends React.Component {

	render() {
		return (
			<div className="production-wrapper">
				<CategoryIndicatorComponent category={this.props.category} squeezed={this.props.squeeze}/>
				<CategoriesComponent/>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {}
}

function mapStateToProps(state) {
	return {
		category: state.categoryChange,
		squeeze: state.squeezeCategories
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductionContainer);