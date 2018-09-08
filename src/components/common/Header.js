import React from 'react';
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
                    <a href="#brand">Parkit Malaysia</a>
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
                    <NavItem>Parkers</NavItem>
                    <NavItem>Owners </NavItem>
                    <NavItem>Login</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export { Header };