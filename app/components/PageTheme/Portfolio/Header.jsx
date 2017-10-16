// imports react component classes
import React from 'react';
import { Link } from 'react-router-dom';

import { string } from 'prop-types';

import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


const NavItemLink = ({to, children}) => (
  <li role="presentation">
    <Link to={to} role="button">{children}</Link>
  </li>
);

const Header = ({handleChangeTheme, themes}) => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">John's Portfolio (React!)</Link>
      </Navbar.Brand>
      <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItemLink to="/resume">Resume</NavItemLink>
        <NavItemLink to="/works">Works</NavItemLink>
      </Nav>
      <Nav pullRight>
        <NavDropdown eventKey={3} title="Choose a Theme!" id="basic-nav-dropdown">
          {themes.map((theme, i) =>
            <MenuItem
              key={theme}
              eventKey={1 + (i+1)/10}
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