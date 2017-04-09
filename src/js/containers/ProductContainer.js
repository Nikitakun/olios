import React from 'react';
import Product from '../components/main-content/Product';

class ProductContainer extends React.Component {

	constructor() {
		super();
		this.state = {
			mounted: false
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({mounted: true});
		}, 10);
	}

	renderProduct() {
		if (this.props.product !== ' ') {
			return <Product product={this.props.product} mounted={this.state.mounted}/>;
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


export default ProductContainer;