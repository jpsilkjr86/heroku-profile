// imports react component classes
import React, { Component } from 'react';

import { Collapse } from 'reactstrap';

import Card from './Card.jsx';

import styles from './ImgCollapseCard.css';

class ImgCollapseCard extends Component {
	state = {
		isOpen: false
	}

	toggle = () => {
		console.log('toggle');
		this.setState(prevState => ({isOpen: !prevState.isOpen}));
	}

	render() {
			
		const { imgSrc, children } = this.props;
		const { isOpen } = this.state;

		return (
		  <div className={styles["img-collapse-card"]}>
		    <img src={imgSrc} className={styles["img"]} onClick={this.toggle}/>
		    <Collapse isOpen={isOpen}>
			    <div className={styles.content}>
			    	{children}
			    </div>
		    </Collapse>
		  </div>
		);
	}
}

export default ImgCollapseCard;