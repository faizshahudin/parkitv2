import React from 'react';

import './Header.css';
import parkitLogo from '../../assets/parkit-logo.png';

import {
    Navbar, 
    Nav, 
    NavItem,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar
            collapseOnSelect
            staticTop
        >
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#brand">
                        <div className="logo-container">
                            <img src={parkitLogo} className="logo" />
                        </div>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullLeft>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search" />
                    </FormGroup>{' '}
                    <Button type="submit">Submit</Button>
                </Navbar.Form>
                <Nav pullRight>
                    <NavItem>Owners </NavItem>
                    <NavItem>Parkers</NavItem>
                    <NavItem>Log In</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export { Header };