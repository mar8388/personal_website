import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import './navbar.css';

export default class Accounts extends React.Component{
	render() {
		return(
			<Navbar className="navbar navbar-custom navbar-fixed-top">
				<div className="container">
				<Navbar.Header className="navbar-header">
					<Navbar.Brand className="navbar-brand">
						<a href="#">George Jose</a>
				    </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse className="collapse navbar-collapse">
			      <Nav className="nav navbar-nav navbar-right">
			        <NavItem className="bold" eventKey={1} href="#">Home</NavItem>
			        <NavItem className="bold active-navbar-item" eventKey={2} href="#">Resume</NavItem>
			        <NavItem eventKey={3} href="#">Work Experience</NavItem>
			        <NavItem eventKey={4} href="#">Projects</NavItem>
			        <NavItem eventKey={5} href="#">Education</NavItem>
			        <NavItem eventKey={6} href="#">Skills</NavItem>
			        <NavItem className="bold" eventKey={7} href="#">Blog</NavItem>
			        <NavItem className="bold" eventKey={8} href="#">Contact</NavItem>
			      </Nav>
			    </Navbar.Collapse>
			   	</div>
			</Navbar>
		);
	}
}