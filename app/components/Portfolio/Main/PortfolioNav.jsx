// imports react component classes
import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import { Panel, Button, Accordion, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Collapse } from 'reactstrap';

const PortfolioNav = props => (
	<div className="text-center">
		<ListGroup>
	    <LinkContainer to="/featured"><ListGroupItem>Featured Works</ListGroupItem></LinkContainer>
	    <LinkContainer to="/about"><ListGroupItem>About Me</ListGroupItem></LinkContainer>
	    <LinkContainer to="/myworks"><ListGroupItem>My Works</ListGroupItem></LinkContainer>
	    <LinkContainer to="/collaborations"><ListGroupItem>Collaborations</ListGroupItem></LinkContainer>
	    <LinkContainer to="/games"><ListGroupItem>Games</ListGroupItem></LinkContainer>
	    <LinkContainer to="/links"><ListGroupItem>External Links</ListGroupItem></LinkContainer>
	  </ListGroup>
  </div>
);

export default PortfolioNav;

/*
class PortfolioNav extends Component {
  state = { collapse: false }

  toggle = () => {
  	console.log('before', this.state);
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  }

  render() {
    return (
      <div className="text-center">
				<ListGroup>
			   	<ListGroupItem onClick={this.toggle}>Featured Works</ListGroupItem>
			    <Collapse isOpen={this.state.collapse}>
			    	<ListGroupItem>1</ListGroupItem>
			    	<ListGroupItem>2</ListGroupItem>
			    	<ListGroupItem>3</ListGroupItem>
			    </Collapse>
			    <LinkContainer to="/about"><ListGroupItem>About Me</ListGroupItem></LinkContainer>
			    <LinkContainer to="/myworks"><ListGroupItem>My Works</ListGroupItem></LinkContainer>
			    <LinkContainer to="/collaborations"><ListGroupItem>Collaborations</ListGroupItem></LinkContainer>
			    <LinkContainer to="/games"><ListGroupItem>Games</ListGroupItem></LinkContainer>
			    <LinkContainer to="/links"><ListGroupItem>External Links</ListGroupItem></LinkContainer>
			  </ListGroup>
		  </div>
    );
  }
}

export default PortfolioNav;

*/

/*
  <ListGroup>
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Morbi leo risus</ListGroupItem>
    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup> 

	<Accordion>
    <Panel header="Collapsible Group Item #1" eventKey="1">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </Panel>
    <Panel header="Collapsible Group Item #2" eventKey="2">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </Panel>
    <Panel header="Collapsible Group Item #3" eventKey="3">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </Panel>
  </Accordion>
  */