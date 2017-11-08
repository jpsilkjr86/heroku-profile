// imports react component classes
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Grid, Row, Col, Clearfix, Button } from 'react-bootstrap';

import Media from 'react-media';

import PortfolioNav from './PortfolioNav';
import InfoCard from './PortfolioItems/cards/InfoCard';

// wrapping grid and row
const GridRow = ({children}) => <main><Grid><Row>{children}</Row></Grid></main>;

// NoMatchRoute for displaying 404
const NoMatchRoute = () => (
  <Route render={props => {console.log(props); return (
    <InfoCard header="404: Page Not Found">
      <Button onClick={props.history.goBack}>Back</Button>
      &nbsp;&nbsp;
      <Button onClick={()=> props.history.push('/')}>Home</Button>
    </InfoCard>
  )}}/>    
);

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
        {/* 404 route put last in the Switch to ensure it is rendered as default */}
        <NoMatchRoute/>
      </Switch>
    </Col>
	</GridRow>
);

export default Main;