// imports react component classes
import React from 'react';

import { withRouter } from 'react-router-dom';

import styles from './PortfolioNavGroupItem.css';

const PortfolioNavGroupItem = ({ location, thisPath, horizontal, children }) => {
	let style = styles.item;

	// if location matches pathname, add styles.active class
	if (location.pathname === thisPath) {
		style += " " + styles.active;
	}

	// if horizontal props exists, add right-content CSS
	if (horizontal) {
		style += " " + styles["right-content"];
	}

	return (
		<div className={style}>
	  	{children}
		</div>
	);
	
};

export default withRouter(PortfolioNavGroupItem);

// // adds "active" class if location matches
// 	location.pathname === thisPath

// 		?	<div className={styles.item + " " + styles.active}>
// 		  	{props.children}
// 		  </div>

// 		:	<div className={styles.item}>
// 		  	{props.children}
// 		  </div>