import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import LeftNavComponent from './LeftNavComponent';

it('should appoint the closing class', () => {
	let component = shallow(<LeftNavComponent show={false} />);
	// console.log(component.find('nav'));
	expect(component.find('nav').hasClass('left-nav--closed')).toEqual(true);
});
