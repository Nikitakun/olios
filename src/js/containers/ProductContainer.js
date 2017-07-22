import React from 'react';
import Product from '../components/main-content/Product';
import {connect} from 'react-redux';
import { fillCart } from '../actions/cart-actions';

class ProductContainer extends React.Component {

	constructor() {
		super();
		this.state = {
			mounted: false
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({mounted: true});
		}, 10);
	}

	renderProduct() {
		if (this.props.product !== ' ') {
			return <Product product={this.props.product} mounted={this.state.mounted} fillCart={this.props.fillCart}/>;
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
		fillCart: (name) => {
			dispatch(fillCart(name));
		}
	}
}

export default connect(null, mapDispatchToProps)(ProductContainer);
