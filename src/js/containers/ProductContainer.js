import React from 'react';
import {connect} from 'react-redux';
import toggleProduct from '../actions/toggle-product-action';
import Product from '../components/main-content/Product';

class ProductContainer extends React.Component {

	componentWillMount() {
		this.props.toggleProduct(this.props.params.product);
	}

	renderProduct() {
		if (this.props.params.product !== ' ') {
			return <Product product={this.props.product}/>;
		} else {
			return (
				<div>
					<h1>
						SORRY, THIS PRODUCT IS NOT YET IN STORE
					</h1>
				</div>
			);
		}
	}

	render() {
		return this.renderProduct();
	}
}

function mapDispatchToProps(dispatch) {
	return {
		toggleProduct: (product) => {
			dispatch(toggleProduct(product));
		}
	};
}

function mapStateToProps(state) {
	return {
		product: state.productChange
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);