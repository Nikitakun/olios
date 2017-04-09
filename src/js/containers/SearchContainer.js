import React from 'react';
import {connect} from 'react-redux';
import searchProduct from '../actions/search-action';
import {Link} from 'react-router';

class SearchContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			value: '',
			resultsCount: this.props.results.length
		};

		this.onInput = this.onInput.bind(this);
	}

	onInput(e) {
		let query = e.target.value;
		this.setState({value: query});
		this.props.searchProduct(query);
	}

	generateResults() {

		let receivedResults = this.props.results;

		let htmlResults = [];

		if (receivedResults.length) {
			receivedResults.forEach( result => {

				let linkString = `/categories/living-room/${result}`;

				result = result.replace('-', ' ').toUpperCase();

				htmlResults.push(
					<li className="search__results-item">
						<Link to={linkString} className="search__results-item-link">
							<div className="search__results-item-image">
								<img src="pics/products-small/red-seat--small.png" />
							</div>
							<span>{result}</span>
						</Link>
					</li>
				);
			});
		}

		return htmlResults;

	}

	render() {
		return (
			<section className="search">
				<div className="search-wrapper">
					<div className="search__panel">
						<input className="search__input" value={this.state.value} onInput={this.onInput} autoFocus={true} />
						<label className="search__label">Type product that you're looking for</label>
					</div>
					<div className="search__results">
						<ul className="search__results-list">
							{this.generateResults()}
						</ul>
					</div>
					<div className="search__indicator">{this.state.resultsCount} searched result{this.state.resultsCount > 1 ? 's' : ''}</div>
				</div>
			</section>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		searchProduct: (query) => {
			dispatch(searchProduct(query));
		}
	};
}

function mapStateToProps(state) {
	return {
		results: state.searchResults
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);