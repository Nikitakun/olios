import React from 'react';
import {Link} from 'react-router';

const HomeComponent = (props) => {

	let nameOfClass = props.mounted ? 'home home--open' : 'home';

	return (
			<section className={nameOfClass}>
				<header className="home__header">
					<h1 className="home__heading">OLIOS</h1>
					<h2 className="home__subheading">NEWEST FURNITURE SHOP</h2>
					<Link className="more-button" to='/categories/living-room/'>View More</Link>
				</header>
				<div className="home__image-block"><img className="home__image" src="src/pics/home-images/home-1.jpg" /></div>
			</section>
	);
};

HomeComponent.propTypes = {
	mounted: React.PropTypes.bool.isRequired
};

export default HomeComponent;