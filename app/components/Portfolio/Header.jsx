// imports react component classes
import React from 'react';
import { Link } from 'react-router-dom';

import { func, array } from 'prop-types';

import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; // for NavLinks to display and work properly

const resumeLink = 'https://docs.google.com/document/d/1bn5rhGN1l2Hli8Ix3WOvoFqV3xSklmLDtQoadtWE26g';

const ExternalLink = ({children, href}) => (
  <li role="presentation">
    <a target="_blank" href={href}>{children}</a>
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
        <LinkContainer to="/featured"><NavItem eventKey={1}>Featured</NavItem></LinkContainer>
        <LinkContainer to="/about"><NavItem eventKey={2}>About Me</NavItem></LinkContainer>
        <ExternalLink href={resumeLink}>Resume</ExternalLink>
        <NavDropdown eventKey={3} title="Choose a Theme!" id="theme-dropdown">
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
  handleChangeTheme: func.isRequired,
  themes: array.isRequired
};
Header.defaultProps = {
  theme: []
};


export default Header;