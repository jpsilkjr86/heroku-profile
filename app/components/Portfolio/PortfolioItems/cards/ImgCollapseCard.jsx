// imports react component classes
import React, { Component } from 'react';

import { Glyphicon, Button, ButtonGroup } from 'react-bootstrap';

import { Collapse } from 'reactstrap';

import Card from './Card.jsx';

import styles from './ImgCollapseCard.css';

import githubIcon from '../img/github.svg';

class ImgCollapseCard extends Component {
	state = {
		isOpen: true
	}

	toggle = () => {
		console.log('toggle');
		this.setState(prevState => ({isOpen: !prevState.isOpen}));
	}

	render() {
			
		const { imgSrc, title, githubLink, deployedLink, description } = this.props;
		const { isOpen } = this.state;

		return (
		  <div className={styles["img-collapse-card"]}>
		  	<Collapse isOpen={isOpen}>
			    <img src={imgSrc} className={styles["img"]} onClick={this.toggle}/>
		    </Collapse>
		    <Collapse isOpen={!isOpen}>
			    <div className={styles.content} onClick={this.toggle}>
			    	<h4>{title}</h4>
			    	{description}
			    </div>
		    </Collapse>
		    <div className={styles.subtext}>
	    	  <ButtonGroup justified>
				    <Button href="#" bsStyle="default" onClick={this.toggle}>
				    	<Glyphicon glyph="plus"/>
				    </Button>
				    <Button href={githubLink} bsStyle="default" target="_blank">
				    	<img src={githubIcon} className={styles["btn-img"]}/>
				    </Button>
				    <Button href={deployedLink} bsStyle="default" target="_blank">
				    	<Glyphicon glyph="link"/>
				    </Button>
				  </ButtonGroup>
		    </div>
		  </div>
		);
	}
}

export default ImgCollapseCard;
/*
<Row>
		    		<Col xs={4}>
				    	<Button href="#" bsStyle="default"><Glyphicon glyph="plus"/></Button>
			    	</Col>
		    		<Col xs={4}>
				    	<Button href="#" bsStyle="default"><img src={github} className={styles["btn-img"]}/></Button>
			    	</Col>
		    		<Col xs={4}>
				    	<Button href="#" bsStyle="default"><Glyphicon glyph="link"/></Button>
			    	</Col>
			    </Row>

<ButtonGroup justified>
				    <Button href="#" bsStyle="success"><Glyphicon glyph="plus"/></Button>
				    <Button href="#" bsStyle="success"><img src={github} className={styles["btn-img"]}/></Button>
				    <Button href="#" bsStyle="success"><Glyphicon glyph="link"/></Button>
				  </ButtonGroup>
<Row>
		    		<Col xs={4}>
				    	<Dropdown id="links">
					      <Dropdown.Toggle bsStyle="success">
					        <Glyphicon glyph="link" />
					      </Dropdown.Toggle>
					      <Dropdown.Menu>
					        <MenuItem eventKey="1">GitHub Repo</MenuItem>
					        <MenuItem eventKey="2">Deployed App</MenuItem>
					      </Dropdown.Menu>
					    </Dropdown>
			    	</Col>
		    		<Col xs={4}>
				    	<Dropdown id="links">
					      <Dropdown.Toggle bsStyle="success">
					        <Glyphicon glyph="link" />
					      </Dropdown.Toggle>
					      <Dropdown.Menu>
					        <MenuItem eventKey="1">GitHub Repo</MenuItem>
					        <MenuItem eventKey="2">Deployed App</MenuItem>
					      </Dropdown.Menu>
					    </Dropdown>
			    	</Col>
		    		<Col xs={4}>
				    	<Dropdown id="links">
					      <Dropdown.Toggle bsStyle="success">
					        <Glyphicon glyph="link" />
					      </Dropdown.Toggle>
					      <Dropdown.Menu>
					        <MenuItem eventKey="1">GitHub Repo</MenuItem>
					        <MenuItem eventKey="2">Deployed App</MenuItem>
					      </Dropdown.Menu>
					    </Dropdown>
			    	</Col>
			    </Row>
			    */