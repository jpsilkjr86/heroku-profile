// imports react component classes
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

import Media from 'react-media';

import PortfolioNav from './Main/PortfolioNav';

const GridRow = ({children}) => <main><Grid><Row>{children}</Row></Grid></main>;

const Main = ({ routes }) => (
	<GridRow>
    <Media query="(min-width: 769px)">
      { smallSizeAndUp => smallSizeAndUp
      	// always display PortfolioNav as side-nav on smallSizeAndUp screens
        ? <div>
        		<Route path="/" render={()=> <Col sm={4}><PortfolioNav routes={routes}/></Col>}/>
	        	<Col sm={8}>
	            <Switch>
	              { routes.map(({path, component: Component}) => (
	              	<Route path={path} key={path} component={Component}/>
	              ))}
	              <Redirect exact from="/" to={routes[0].path}/>
	            </Switch>
	          </Col>
          </div>
        // for small screens, only display nav at path="/"
        : <Switch>
			      <Route exact path="/" render={()=> <Col xs={12}><PortfolioNav routes={routes}/></Col>}/>
            { routes.map(({path, component: Component}) => (
            	<Route path={path} key={path} render={() => <Col xs={12}><Component/></Col>}/>
            ))}
          </Switch>
      }
    </Media>
	</GridRow>
);

export default Main;