import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import './navbar.css';

export default class Accounts extends React.Component{
	render() {
		return(
			<div className="navbar-black bottom-padding">
			<Navbar inverse className="navbar-fixed-top">
			<Navbar.Header>
				<Navbar.Brand className="brand">
					<a href="#">React</a>
			    </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav>
			        <NavItem eventKey={1} href="#">Link</NavItem>
			        <NavItem eventKey={2} href="#">Link</NavItem>
			      </Nav>
			    </Navbar.Collapse>
			</Navbar>
			</div>
		);
	}
}