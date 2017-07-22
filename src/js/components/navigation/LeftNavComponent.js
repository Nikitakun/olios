import React from 'react';
import {Link} from 'react-router';

const LeftNavComponent = (props) => {

	let nameOfClass = props.show ? 'cart cart--show' : 'cart';

	function deleteCartItem(e) {
		props.deleteItem(e.target.key);
	}

	function renderCartItems() {

		let elems = [];

		if (props.items.length) {
			props.items.forEach(e => {
				elems.push(<div className="cart__item" key={e.key}><span className="cart__item-name">{e.name}</span><span className="cart__item-amount"></span><span className="cart__close-button" onClick={deleteCartItem} /></div>);
			});
		}

		return elems;
	}

	function toggleCart(e) {
		console.log(e.target);
		if (e.target.tagName === 'LI' || e.target.tagName === 'PATH' || e.target.tagName === 'SVG') {
			props.toggleCart();
		}
	}

	return (
		<nav className="left-nav"><a className="main-logo" href="#"><img className="left-nav__image" src="src/pics/logo.png" /></a>
			<ul className="left-nav__menu">
				<li className="left-nav__item">
					<Link to='/'>
						<svg className="left-nav__image" preserveAspectRatio="xMidYMid" width={26} height="31.969" viewBox="0 0 26 31.969">
							<defs>
								<style dangerouslySetInnerHTML={{__html: '\n                .cls-1 {\n                fill: #d8d8d8;\n                fill-rule: evenodd;\n                }\n              ' }} />
							</defs>
							<path className="cls-1" d="M13.000,3.711 L23.000,13.711 L23.000,28.969 L18.000,28.969 L18.000,21.969 C18.000,20.864 17.104,19.969 16.000,19.969 L10.000,19.969 C8.895,19.969 8.000,20.864 8.000,21.969 L8.000,28.969 L3.000,28.969 L3.000,13.711 L13.000,3.711 M13.884,0.352 C13.395,-0.136 12.604,-0.136 12.116,0.352 L0.586,11.883 C0.211,12.258 -0.000,12.767 -0.000,13.297 L-0.000,29.969 C-0.000,31.073 0.895,31.969 2.000,31.969 L9.000,31.969 C10.104,31.969 11.000,31.073 11.000,29.969 L11.000,22.969 L15.000,22.969 L15.000,29.969 C15.000,31.073 15.895,31.969 17.000,31.969 L24.000,31.969 C25.104,31.969 26.000,31.073 26.000,29.969 L26.000,13.297 C26.000,12.767 25.789,12.258 25.414,11.883 L13.884,0.352 Z" />
						</svg>
					</Link>
				</li>
				<li className="left-nav__item" onClick={toggleCart}>
					<section className={nameOfClass}>
						{renderCartItems()}
					</section>
					<svg className="left-nav__image" preserveAspectRatio="xMidYMid" width={36} height={32} viewBox="0 0 36 32">
						<defs>
							<style dangerouslySetInnerHTML={{__html: '\n                .cls-1 {\n                fill: #d8d8d8;\n                fill-rule: evenodd;\n                }\n              ' }} />
						</defs>
						<path className="cls-1" d="M33.000,9.000 L27.905,9.000 C27.868,8.898 27.830,8.797 27.773,8.706 L22.774,0.706 C22.508,0.282 22.037,-0.000 21.500,-0.000 C20.672,-0.000 20.000,0.671 20.000,1.500 C20.000,1.791 20.083,2.063 20.227,2.294 L24.418,9.000 L11.582,9.000 L15.774,2.294 C15.917,2.063 16.000,1.791 16.000,1.500 C16.000,0.671 15.328,-0.000 14.500,-0.000 C13.963,-0.000 13.492,0.282 13.227,0.706 L8.227,8.706 C8.170,8.797 8.132,8.898 8.095,9.000 L3.000,9.000 C1.343,9.000 0.000,10.343 0.000,12.000 L0.000,14.000 C0.000,15.421 0.991,16.604 2.317,16.915 L6.121,29.848 C6.487,31.092 7.638,32.000 9.000,32.000 L27.000,32.000 C28.362,32.000 29.513,31.092 29.879,29.848 L33.683,16.915 C35.009,16.604 36.000,15.421 36.000,14.000 L36.000,12.000 C36.000,10.343 34.657,9.000 33.000,9.000 ZM3.000,12.000 L33.000,12.000 L33.000,14.000 L3.000,14.000 L3.000,12.000 ZM27.000,29.000 L8.999,29.002 L5.470,17.000 L30.530,17.000 L27.000,29.000 Z" />
					</svg>
				</li>
				<li className="left-nav__item">
					<Link to='/search'>
						<svg className="left-nav__image" preserveAspectRatio="xMidYMid" width={32} height={32} viewBox="0 0 32 32">
							<defs>
								<style dangerouslySetInnerHTML={{__html: '\n                .cls-1 {\n                fill: #d8d8d8;\n                fill-rule: evenodd;\n                }\n              ' }} />
							</defs>
							<path className="cls-1" d="M20.000,-0.000 C13.373,-0.000 8.000,5.373 8.000,12.000 C8.000,14.772 8.949,17.318 10.529,19.349 L0.439,29.439 C0.146,29.732 -0.000,30.115 -0.000,30.500 C-0.000,30.884 0.146,31.267 0.439,31.560 C0.732,31.853 1.116,32.000 1.500,32.000 C1.884,32.000 2.268,31.853 2.560,31.560 L12.650,21.471 C14.681,23.051 17.227,24.000 20.000,24.000 C26.627,24.000 32.000,18.627 32.000,12.000 C32.000,5.373 26.627,-0.000 20.000,-0.000 ZM20.000,21.000 C15.037,21.000 11.000,16.963 11.000,12.000 C11.000,7.037 15.037,3.000 20.000,3.000 C24.963,3.000 29.000,7.037 29.000,12.000 C29.000,16.963 24.963,21.000 20.000,21.000 Z" />
						</svg>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default LeftNavComponent;

