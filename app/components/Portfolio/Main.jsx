// imports react component classes
import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { Grid, Row, Col, Clearfix, Button } from 'react-bootstrap';

import Media from 'react-media';

import { TransitionGroup } from 'react-transition-group'

import PortfolioNav from './PortfolioNav';
import InfoCard from './PortfolioItems/cards/InfoCard';

import Fade from './Fade';

import styles from './Main.css';

// wrapping grid and row
const GridRow = ({children}) => <main><Grid><Row>{children}</Row></Grid></main>;

// NoMatchRoute for displaying 404
const NoMatchRoute = () => (
  <Route render={props => (
    <InfoCard header="404: Page Not Found">
      <Button onClick={props.history.goBack}>Back</Button>
      &nbsp;&nbsp;
      <Button onClick={()=> props.history.push('/')}>Home</Button>
    </InfoCard>
  )}/>    
);

// routes is array passed down as props
const Main = ({ routes, location }) => {
  // saves location as key for TransitionGroup wrapping the Switch component.
  // followed roughly this example: https://codesandbox.io/s/4RAqrkRkn?view=preview
  const currentKey = location.pathname.split('/')[1] || '/';

  return (
  	<GridRow>
      {/* first column is PortfolioNav */}
      <Col xs={12} sm={3}>
        {/* displays PortfolioNav as horizontal card if screen is small */}
        <Media query="(max-width: 767px)">
          { screenIsSmall => screenIsSmall
            ? <PortfolioNav routes={routes} horizontal/>
            : <PortfolioNav routes={routes}/> 
          }
        </Media>
      </Col>
      <Clearfix visibleXsBlock/>
      {/* second column is route content */}
    	<Col xs={12} sm={9}>
        <TransitionGroup className={styles["content-wrapper"]} appear>
          <Fade key={currentKey}>
            <section className={styles["content-inner"]}>
              <Switch location={location}>
                { routes.map(({path, component: Component}) => (
                	<Route path={path} key={path} component={Component}/>
                ))}
                <Redirect exact from="/" to={routes[0].path}/>
                {/* 404 route put last in the Switch to ensure it is rendered as default */}
                <NoMatchRoute/>
              </Switch>
            </section>
          </Fade>
        </TransitionGroup>
      </Col>
  	</GridRow>
  );
}

// wrap in withRouter to get access to location for setting key for TransitionGroup
export default withRouter(Main);

// //testing fade
// class FadeInAndOut extends React.Component {
//   constructor(...args) {
//     super(...args);
//     this.state = { show: false }

//     setInterval(() => {
//       this.setState({ show: !this.state.show })
//     }, 1000)
//   }
//   render() {
//     return (
//       <Route render={props => (
//         <Fade in={this.state.show}>
//           <InfoCard header="Test">
//             Test
//           </InfoCard>
//         </Fade>
//       )}/>
//     );
//   }
// }