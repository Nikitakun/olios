import React from 'react';

const CategoryIndicatorComponent = (props) => {

	let nameOfClass = props.squeezed ? 'category-indicator category-indicator--squeezed' : 'category-indicator';

	return (
		<div className={nameOfClass}>
			<h1 className="category-indicator__heading">PRODUCTS</h1>
			<div className="category-indicator__type"><a className="category-indicator__link" href="#"><span className="category-indicator__name">{props.category}</span></a></div>
		</div>
	);
};

CategoryIndicatorComponent.propTypes = {
	category: React.PropTypes.string.isRequired,
	squeezed: React.PropTypes.bool.isRequired
};

export default CategoryIndicatorComponent;