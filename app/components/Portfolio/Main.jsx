// imports react component classes
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

import Media from 'react-media';

import ProjectNav from './Main/ProjectNav';
import AboutMe from './Main/AboutMe';
import Games from './Main/Games';


const Main = props => (
	<main>
		<Grid>
			<Row>
		    <Media query="(min-width: 769px)">
		      { smallSizeAndUp => smallSizeAndUp
		      	// always display ProjectNav as side-nav on smallSizeAndUp screens
		        ? <div>
		        		<Route path="/" render={()=> <Col sm={6}><ProjectNav/></Col>}/>
			        	<Col sm={6}>
			            <Switch>
			              <Route path="/about" component={AboutMe}/>
			              <Route path="/games" component={Games}/>
			              <Redirect exact from="/" to="/about"/>
			            </Switch>
			          </Col>
		          </div>
		        // for small screens, only display nav at path="/"
		        : <Switch>
					      <Route exact path="/" render={()=> <Col xs={12}><ProjectNav/></Col>}/>
	              <Route path="/about" render={()=> <Col xs={12}><AboutMe/></Col>}/>
	              <Route path="/games" render={()=> <Col xs={12}><Games/></Col>}/>
		          </Switch>
		      }
		    </Media>
		  </Row>
	  </Grid>
  </main>
);

export default Main;