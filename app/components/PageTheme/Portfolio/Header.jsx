// imports react component classes
import React from 'react';
import { Link } from 'react-router-dom';

import { string } from 'prop-types';

import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const resumeLink = 'https://docs.google.com/document/d/1bn5rhGN1l2Hli8Ix3WOvoFqV3xSklmLDtQoadtWE26g/edit?usp=sharing';

const NavItemLink = ({to, children, externalTarget}) => (
  <li role="presentation">
    {externalTarget ? (
      <a target="_blank" href={externalTarget}>{children}</a>
    ) : (
      <Link to={to} role="button">{children}</Link>
    )}
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
      <Nav pullRight>
        <NavItemLink externalTarget={resumeLink}>Resume</NavItemLink>
        <NavItemLink to="/works">Works</NavItemLink>
        <NavItemLink to="/games">Games</NavItemLink>
        <NavDropdown eventKey={1} title="Choose a Theme!" id="theme-dropdown">
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