import React from 'react';
import HomeComponent from '../components/main-content/HomeComponent';

class HomeContainer extends React.Component {

	constructor() {
		super();
		this.state = {
			mounted: false
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({mounted: !this.state.mounted});
		}, 100);
	}

	render() {
		return (
			<HomeComponent mounted={this.state.mounted}/>
		);
	}
}

export default HomeContainer;