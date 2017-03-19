import React from 'react';
import {connect} from 'react-redux';
import CategoryIndicatorComponent from '../components/main-content/production-wrapper-content/CategoryIndicatorComponent';
import CategoriesComponent from '../components/main-content/production-wrapper-content/CategoriesComponent';
import changeCategory from '../actions/change-category-action';

class CategoriesContainer extends React.Component {

	constructor() {
		super();
		this.state = {
			mounted: false
		};
	}

	componentWillMount() {
		this.props.changeCategory(this.props.params.categoryType);
	}

	componentDidMount() {
		setTimeout(
			() => {
				this.setState({mounted: true});
			}, 100);
	}

	renderWrapper() {
		if (this.props.category === ' ') {
			return null;
		} else {
			return (
				<div className="production-wrapper">
					<CategoryIndicatorComponent category={this.props.category} squeezed={this.props.squeeze}/>
					{this.renderCategories()}
				</div>
			);
		}
	}

	renderCategories() {
		if (this.props.params.product) {
			return null;
		} else {
			return <CategoriesComponent mounted={this.state.mounted}/>;
		}
	}

	render() {
		return this.renderWrapper();
	}
}

function mapDispatchToProps(dispatch) {
	return {
		changeCategory: (category) => {
			dispatch(changeCategory(category));
		}
	};
}

function mapStateToProps(state) {
	return {
		category: state.categoryChange,
		squeeze: state.squeezeCategories
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);