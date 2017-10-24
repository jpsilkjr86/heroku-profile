// imports react component classes
import React, { Component } from 'react';

import { Col } from 'react-bootstrap';

import { Collapse } from 'reactstrap';

import Card from './Card.jsx';

import styles from './ImgCollapseCard.css';

class ImgCollapseCard extends Component {
	state = {
		isOpen: true
	}

	toggle = () => {
		console.log('toggle');
		this.setState(prevState => ({isOpen: !prevState.isOpen}));
	}

	render() {
			
		const { imgSrc, link, subtext, children } = this.props;
		const { isOpen } = this.state;

		return (
		  <div className={styles["img-collapse-card"]}>
		  	<Collapse isOpen={isOpen}>
			    <img src={imgSrc} className={styles["img"]} onClick={this.toggle}/>
		    </Collapse>
		    <Collapse isOpen={!isOpen}>
			    <div className={styles.content} onClick={this.toggle}>
			    	{children}
			    </div>
		    </Collapse>
		    <div className={styles.subtext}>{subtext}</div>
		  </div>
		);
	}
}

export default ImgCollapseCard;