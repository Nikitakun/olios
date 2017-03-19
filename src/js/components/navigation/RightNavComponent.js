import React from 'react';
import {Link} from 'react-router';

const RightNavComponent = (props) => {

	let nameOfClass =  props.show ? 'right-nav right-nav--open' : 'right-nav';

	return (
		<nav className={nameOfClass}>
			<div className="right-nav__block">
				<ul className="right-nav__menu">
					<li className="right-nav__item"><Link to='/categories/living-room' className="right-nav__link" onClick={props.changeCategory}><span className="right-nav__item-name">Living Room</span></Link></li>
					<li className="right-nav__item"><Link to='/categories/office' className="right-nav__link right-nav__link--office" onClick={props.changeCategory}><span className="right-nav__item-name">Office</span></Link></li>
					<li className="right-nav__item"><Link to='/categories/for-kids' className="right-nav__link right-nav__link--kids" onClick={props.changeCategory}><span className="right-nav__item-name">For kids</span></Link></li>
					<li className="right-nav__item"><Link to='/categories/kitchen' className="right-nav__link right-nav__link--kitchen" onClick={props.changeCategory}><span className="right-nav__item-name">Kitchen</span></Link></li>
					<li className="right-nav__item"><Link to='/categories/accessories' className="right-nav__link right-nav__link--accessories" onClick={props.changeCategory}><span className="right-nav__item-name">Accessories</span></Link></li>
				</ul>
			</div>
		</nav>
	);
};



RightNavComponent.propTypes = {
	show: React.PropTypes.bool.isRequired,
	changeCategory: React.PropTypes.func.isRequired
};

export default RightNavComponent;