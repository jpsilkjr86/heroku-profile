// imports react component classes
import React from 'react';
import { Link } from 'react-router-dom';

import { string } from 'prop-types';

import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = ({handleChangeTheme, themes}) => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
      </Nav>
      <Nav pullRight>
        <NavDropdown eventKey={3} title="Choose a Theme!" id="basic-nav-dropdown">
          {themes.map((theme, i) =>
            <MenuItem
              key={theme}
              eventKey={3 + (i+1)/10}
              onClick={() => handleChangeTheme(i)}
            >
              {theme}
            </MenuItem>
          )}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  fizz: string.isRequired
};
Header.defaultProps = {
  fizz: 'fazz'
};


export default Header;