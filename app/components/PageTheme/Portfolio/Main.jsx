// imports react component classes
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Grid, Row, Col, Button } from 'react-bootstrap';


const Main = ({foo}) => (
  <Grid>
  	<Row>
  		<Col xs={12} sm={6}>
  			<h1>Hello, {foo}!</h1>
		    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
		    <p><Button bsStyle="primary">Learn more</Button></p>
  		</Col>
  		<Col xs={12} sm={6}>
  			<h1>Hello, {foo}!</h1>
		    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
		    <p><Button bsStyle="primary">Learn more</Button></p>
  		</Col>
    </Row>
  </Grid>
);

export default Main;