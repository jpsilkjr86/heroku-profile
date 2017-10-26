// imports react component classes
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

import Media from 'react-media';

import PortfolioNav from './PortfolioNav';

const GridRow = ({children}) => <main><Grid><Row>{children}</Row></Grid></main>;

const Main = ({ routes }) => (
	<GridRow>
    <Col xs={12} sm={3}>
      <Route path="/" render={()=> (
        // displays PortfolioNav as horizontal card if screen is small
        <Media query="(max-width: 767px)">
          { screenIsSmall => screenIsSmall
            ? <PortfolioNav routes={routes} horizontal/>
            : <PortfolioNav routes={routes}/> 
          }
        </Media>
      )}/>
    </Col>
    <Clearfix visibleXsBlock/>
  	<Col xs={12} sm={9}>
      <Switch>
        { routes.map(({path, component: Component}) => (
        	<Route path={path} key={path} component={Component}/>
        ))}
        <Redirect exact from="/" to={routes[0].path}/>
      </Switch>
    </Col>
	</GridRow>
);

export default Main;