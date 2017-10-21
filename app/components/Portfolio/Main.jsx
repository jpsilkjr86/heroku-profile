// imports react component classes
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

import Media from 'react-media';

import PortfolioNav from './Main/PortfolioNav';
import AboutMe from './Main/AboutMe';
import Games from './Main/Games';

const GridRow = ({children}) => <main><Grid><Row>{children}</Row></Grid></main>;

const Main = props => (
	<GridRow>
    <Media query="(min-width: 769px)">
      { smallSizeAndUp => smallSizeAndUp
      	// always display PortfolioNav as side-nav on smallSizeAndUp screens
        ? <div>
        		<Route path="/" render={()=> <Col sm={4}><PortfolioNav/></Col>}/>
	        	<Col sm={8}>
	            <Switch>
	              <Route path="/about" component={AboutMe}/>
	              <Route path="/games" component={Games}/>
	              <Redirect exact from="/" to="/about"/>
	            </Switch>
	          </Col>
          </div>
        // for small screens, only display nav at path="/"
        : <Switch>
			      <Route exact path="/" render={()=> <Col xs={12}><PortfolioNav/></Col>}/>
            <Route path="/about" render={()=> <Col xs={12}><AboutMe/></Col>}/>
            <Route path="/games" render={()=> <Col xs={12}><Games/></Col>}/>
          </Switch>
      }
    </Media>
	</GridRow>
);

export default Main;