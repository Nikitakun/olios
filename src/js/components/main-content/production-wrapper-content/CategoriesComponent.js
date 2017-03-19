import React from 'react';
import {Link} from 'react-router';

const CategoriesComponent = (props) => {

	let nameOfClass = props.mounted ? 'categories categories--open' : 'categories';

	return (
		<section className={nameOfClass}>
			<ul className="categories__products">
				<li className="categories__products-item">
					<Link to='/categories/living-room/red-seat'>
						<div className="categories__products-image"><img src="src/pics/products-small/red-seat--small.png" /></div>
						<div className="categories__products-caption"><span className="categories__products-name">RED SEAT</span>
							<p className="categories__products-description">Lorem ipsum dolor sit amet</p><span className="categories__products-price">$45</span>
						</div>
					</Link>
				</li>
				<li className="categories__products-item">
					<Link to='/categories/living-room/white-table'>
						<div className="categories__products-image"><img src="src/pics/products-small/red-seat--small.png" /></div>
						<div className="categories__products-caption"><span className="categories__products-name">WHITE TABLE</span>
							<p className="categories__products-description">Lorem ipsum dolor sit amet</p><span className="categories__products-price">$350</span>
						</div>
					</Link>
				</li>
				<li className="categories__products-item">
					<Link to='/categories/living-room/blue-seat'>
						<div className="categories__products-image"><img src="src/pics/products-small/red-seat--small.png" /></div>
						<div className="categories__products-caption"><span className="categories__products-name">BLUE SEAT</span>
							<p className="categories__products-description">Lorem ipsum dolor sit amet</p><span className="categories__products-price">$35</span>
						</div>
					</Link>
				</li>
				<li className="categories__products-item">
					<Link to='/categories/living-room/modern-bed'>
						<div className="categories__products-image"><img src="src/pics/products-small/red-seat--small.png" /></div>
						<div className="categories__products-caption"><span className="categories__products-name">MODERN BED</span>
							<p className="categories__products-description">Lorem ipsum dolor sit amet</p><span className="categories__products-price">$120</span>
						</div>
					</Link>
				</li>
				<li className="categories__products-item">
					<Link to='/categories/living-room/dark-seat'>
						<div className="categories__products-image"><img src="src/pics/products-small/red-seat--small.png" /></div>
						<div className="categories__products-caption"><span className="categories__products-name">DARK SEAT</span>
							<p className="categories__products-description">Lorem ipsum dolor sit amet</p><span className="categories__products-price">$50</span>
						</div>
					</Link>
				</li>
			</ul>
		</section>
	);
};

CategoriesComponent.propTypes = {
	mounted: React.PropTypes.bool.isRequired
};

export default CategoriesComponent;