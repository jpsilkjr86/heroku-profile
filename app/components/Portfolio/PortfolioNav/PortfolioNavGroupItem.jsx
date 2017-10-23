// imports react component classes
import React from 'react';

import { withRouter } from 'react-router-dom';

import styles from './PortfolioNavGroupItem.css';

const PortfolioNavGroupItem = props => (
	// adds "active" class if location matches
	props.location.pathname === props.thisPath

		?	<div className={styles.item + " " + styles.active}>
		  	{props.children}
		  </div>

		:	<div className={styles.item}>
		  	{props.children}
		  </div>
);

export default withRouter(PortfolioNavGroupItem);