// imports react component classes
import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

import Media from 'react-media'

import AboutMe from './AboutMe';
import Games from './Games';


const ProjectNav = props => (
	<Row>
    <Col xs={12} sm={6}>
      <Panel>
		    <h1>Hello!</h1>
		    <p>Project Nav</p>
		    <p><Button bsStyle="primary">Learn more</Button></p>
		  </Panel>
    </Col>
    <Media query="(min-width: 769px)">
      { smallSizeAndUp => smallSizeAndUp
        ? <Col xs={12} sm={6}>
            <Switch>
              <Route path="/about" component={AboutMe}/>
              <Route path="/games" component={Games}/>
              <Redirect exact from="/" to="/about"/>
            </Switch>
          </Col>
        : <Col xs={12} sm={6}>
            <Switch>
              <Route path="/about" component={AboutMe}/>
              <Route path="/games" component={Games}/>
            </Switch>
          </Col>
      }
    </Media>
  </Row>
);

export default ProjectNav;