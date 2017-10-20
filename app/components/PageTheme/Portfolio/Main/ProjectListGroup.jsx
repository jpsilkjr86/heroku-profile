// imports react component classes
import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

import Media from 'react-media'


const ProjectListGroup = props => (
	<Panel>
    <h1>Hello!</h1>
    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p><Button bsStyle="primary">Learn more</Button></p>
  </Panel>
);

export default ProjectListGroup;