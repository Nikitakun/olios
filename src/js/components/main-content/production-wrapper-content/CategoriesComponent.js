import React from 'react';

const CategoriesComponent = () => {
	return (
		<section className="categories">
			<ul className="categories__products">
				<li className="categories__products-item">
					<div className="categories__products-image"><img src="src/pics/products-small/red-seat--small.png" /></div>
					<div className="categories__products-caption"><span className="categories__products-name">RED SEAT</span>
						<p className="categories__products-description">Lorem ipsum dolor sit amet</p><span className="categories__products-price">$45</span>
					</div>
				</li>
				<li className="categories__products-item">
					<div className="categories__products-image"><img src="src/pics/products-small/red-seat--small.png" /></div>
					<div className="categories__products-caption"><span className="categories__products-name">WHITE TABLE</span>
						<p className="categories__products-description">Lorem ipsum dolor sit amet</p><span className="categories__products-price">$350</span>
					</div>
				</li>
				<li className="categories__products-item">
					<div className="categories__products-image"><img src="src/pics/products-small/red-seat--small.png" /></div>
					<div className="categories__products-caption"><span className="categories__products-name">BLUE SEAT</span>
						<p className="categories__products-description">Lorem ipsum dolor sit amet</p><span className="categories__products-price">$35</span>
					</div>
				</li>
				<li className="categories__products-item">
					<div className="categories__products-image"><img src="src/pics/products-small/red-seat--small.png" /></div>
					<div className="categories__products-caption"><span className="categories__products-name">MODERN BED</span>
						<p className="categories__products-description">Lorem ipsum dolor sit amet</p><span className="categories__products-price">$120</span>
					</div>
				</li>
				<li className="categories__products-item">
					<div className="categories__products-image"><img src="src/pics/products-small/red-seat--small.png" /></div>
					<div className="categories__products-caption"><span className="categories__products-name">DARK SEAT</span>
						<p className="categories__products-description">Lorem ipsum dolor sit amet</p><span className="categories__products-price">$50</span>
					</div>
				</li>
			</ul>
		</section>
	);
};

export default CategoriesComponent;