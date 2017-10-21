// imports react component classes
import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import { Panel, Button } from 'react-bootstrap';

const ProjectNav = props => (
	<Panel>
    <h1>Hello!</h1>
    <p>Project Nav</p>
    <p><Button bsStyle="primary">Learn more</Button></p>
  </Panel>
);

export default ProjectNav;