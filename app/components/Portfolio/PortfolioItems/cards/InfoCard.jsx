// imports react component classes
import React from 'react';

import styles from './InfoCard.css';

const InfoCard = ({ header, children, linkIcons }) => (
  <div className={styles["info-card"]}>
  	<div className={styles["content-wrapper"]}>
  		<div className={styles["header-div"]}>
  			<h3 className={styles["header-text"]}>{header}</h3>
  			{linkIcons && linkIcons.length > 0 && linkIcons.map((LinkIcon, i) => (
  				<div key={i} className={styles["header-icon"]}>
  					<LinkIcon/>
  				</div>
  			))}
  		</div>
  		<hr/>
	  	{children}
	  </div>
  </div>
);

export default InfoCard;