import React from 'react';

const BurgerIconComponent = (props) => {

	let nameOfClass = props.clicked ? 'burger-icon burger-icon--clicked' : 'burger-icon';

	return (
		<div className={nameOfClass} onClick={props.toggleRightNav}>
			<span className="burger-icon__line" />
		</div>
	);
};

BurgerIconComponent.propTypes = {
	clicked: React.PropTypes.bool.isRequired,
	toggleRightNav: React.PropTypes.func.isRequired
};

export default BurgerIconComponent;