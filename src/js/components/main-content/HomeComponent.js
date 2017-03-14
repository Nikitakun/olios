import React from 'react';
import {Link} from 'react-router';

const HomeComponent = () => {
	return (
		<section className="home">
			<header className="home__header">
				<h1 className="home__heading">OLIOS</h1>
				<h2 className="home__subheading">NEWEST FURNITURE SHOP</h2>
				<Link className="more-button" to='/products'>View More</Link>
			</header>
			<div className="home__image-block"><img className="home__image" src="src/pics/home-images/home-1.jpg" /></div>
		</section>
	);
};

export default HomeComponent;