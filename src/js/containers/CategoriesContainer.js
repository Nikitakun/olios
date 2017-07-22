import React from 'react';
import {connect} from 'react-redux';
import CategoryIndicatorComponent from '../components/main-content/production-wrapper-content/CategoryIndicatorComponent';
import CategoriesComponent from '../components/main-content/production-wrapper-content/CategoriesComponent';
import ProductContainer from './ProductContainer';
import changeCategory from '../actions/change-category-action';
import toggleProduct from '../actions/toggle-product-action';

class CategoriesContainer extends React.Component {

	constructor() {
		super();
		this.state = {
			mounted: false
		};
	}

	componentWillMount() {
		this.props.changeCategory(this.props.params.categoryType);
		this.props.toggleProduct(this.props.params.product);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.params.categoryType !== this.props.params.categoryType) {
			this.props.changeCategory(nextProps.params.categoryType);
		}
		if (nextProps.params.product !== this.props.params.product) {
			this.props.toggleProduct(nextProps.params.product);
		}

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

			let nameOfClass = 'production-wrapper';

			if (this.props.params.product) {
				nameOfClass += ' production-wrapper--producted';
			}

			return (
				<div className={nameOfClass}>
					<CategoryIndicatorComponent category={this.props.category} squeezed={this.props.squeeze}/>
					{this.renderCategories()}
					{this.renderProduct()}
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

	renderProduct() {
		if (this.props.params.product) {
			return <ProductContainer product={this.props.product} paramsProduct={this.props.params.product} />;
		} else {
			return null;
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
		},
		toggleProduct: (product) => {
			dispatch(toggleProduct(product));
		}
	};
}

function mapStateToProps(state) {
	return {
		category: state.categoryChange,
		squeeze: state.squeezeCategories,
		product: state.productChange
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);