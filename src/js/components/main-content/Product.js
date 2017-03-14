import React from 'react';

const Product = () => {
	return (
		<section className="product">
			<div className="product__picture-section">
				<div className="product__likes"><span>495</span>
					<svg className="left-nav__image" preserveAspectRatio="xMidYMid" width={32} height={30} viewBox="0 0 32 30">
						<defs>
							<style dangerouslySetInnerHTML={{__html: '\n                  .cls-1 {\n                    fill: #ff547c;\n                    fill-rule: evenodd;\n                  }\n                ' }} />
						</defs>
						<path className="cls-1" d="M23.000,3.000 C26.308,3.000 29.000,5.691 29.000,9.000 C29.000,17.839 19.565,24.391 16.000,26.550 C12.434,24.391 3.000,17.839 3.000,9.000 C3.000,5.691 5.691,3.000 9.000,3.000 C10.818,3.000 12.519,3.814 13.667,5.234 C14.236,5.939 15.094,6.348 16.000,6.348 L16.000,6.348 C16.906,6.348 17.764,5.939 18.333,5.234 C19.480,3.814 21.182,3.000 23.000,3.000 M23.000,-0.000 C20.171,-0.000 17.649,1.307 16.000,3.348 C14.349,1.307 11.829,-0.000 9.000,-0.000 C4.029,-0.000 -0.000,4.029 -0.000,9.000 C-0.000,21.000 14.000,29.000 16.000,30.000 C18.000,29.000 32.000,21.000 32.000,9.000 C32.000,4.029 27.971,-0.000 23.000,-0.000 L23.000,-0.000 Z" />
					</svg>
				</div>
				<div className="product__picture" />
				<div className="product__zoom-controls"><span className="product__zoom-tweak product__scale-up" /><span className="product__zoom-tweak product__scale-down" /></div>
			</div>
			<div className="product__info-section">
				<div className="product__details">
					<h1 className="product__heading">White Seat - office</h1>
					<p className="product__description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum interdum malesuada. Sed ornare posuere lobortis.</p>
					<div className="product__cost-info">
						<div className="product__cost-block">
							<p className="product__cost-heading">Cost</p><span className="product__cost">$65</span><span className="product__cost product__cost--discount">$90</span>
						</div>
						<div className="product__cost-block">
							<p className="product__cost-heading">Quantity</p>
							<ul className="product__quantity-select">
								<li className="product__quantity-number product__quantity-number--active">1
									<ul className="product__quantity-select product__quantity-select--hidden">
										<li className="product__quantity-number">2</li>
										<li className="product__quantity-number">3</li>
										<li className="product__quantity-number">4</li>
									</ul>
								</li>
							</ul>
						</div><a className="button__cart-add">Add to cart</a>
					</div>
				</div>
				<section className="recommended">
					<h1 className="recommended__heading">Recommended</h1>
					<ul className="recommended__list">
						<li className="recommended__item">
							<div className="recommended__image"><img src="src/pics/products-small/red-seat--small.png" /></div>
							<div className="recommended__caption"><span className="recommended__name">RED SEAT</span>
								<p className="recommended__description">Lorem ipsum dolor sit amet</p>
							</div>
						</li>
						<li className="recommended__item">
							<div className="recommended__image"><img src="src/pics/products-small/red-seat--small.png" /></div>
							<div className="recommended__caption"><span className="recommended__name">RED SEAT</span>
								<p className="recommended__description">Lorem ipsum dolor sit amet</p>
							</div>
						</li>
						<li className="recommended__item">
							<div className="recommended__image"><img src="src/pics/products-small/red-seat--small.png" /></div>
							<div className="recommended__caption"><span className="recommended__name">RED SEAT</span>
								<p className="recommended__description">Lorem ipsum dolor sit amet</p>
							</div>
						</li>
					</ul>
				</section>
			</div>
		</section>
	);
};

export default Product;