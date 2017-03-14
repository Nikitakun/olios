import React from 'react';

const BurgerIconComponent = (props) => {

	let nameOfClass = props.clicked ? 'burger-icon burger-icon--clicked' : 'burger-icon';

	return (
		<div className={nameOfClass}>
			<span className="burger-icon__line" />
		</div>
	);
};

BurgerIconComponent.propTypes = {
	clicked: React.PropTypes.bool.isRequired
};

export default BurgerIconComponent;