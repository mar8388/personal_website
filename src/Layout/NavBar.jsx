import React from 'react';
import { Nav, NavItem, Navbar, Grid, Col } from 'react-bootstrap';
import classnames from 'classnames';

import './NavBar.css';

const NavBarTop = () => {
	console.log(NavItem);
	return (
		<Nav className="col-xs-12" bsStyle="pills" activeKey={1}>
			<NavItem className="col-xs-4" eventKey={1} href="/home">NavItem 1 content</NavItem>
			<NavItem className="col-xs-4" eventKey={2} title="Item">NavItem 2 content</NavItem>
			<NavItem className="col-xs-4" eventKey={3} disabled>NavItem 3 content</NavItem>
		</Nav>
	);
};

export default NavBarTop;