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
			<div className={styles.wrapper}>
			  <div className={styles["img-collapse-card"]}>
			  	<Collapse isOpen={isOpen}>
			  		<div className={styles["img-div"]} onClick={this.toggle}>
					    <img src={imgSrc} className={styles.img}/>
					    <div className={styles["title-wrapper"]}>
					    	<h4 className={styles.title}>{title}</h4>
					    </div>
				    </div>
			    </Collapse>
			    <Collapse isOpen={!isOpen}>
				    <div className={styles.content} onClick={this.toggle}>
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
		  </div>
		);
	}
}

export default ImgCollapseCard;