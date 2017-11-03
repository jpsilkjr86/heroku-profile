// imports react component classes
import React from 'react';

import styles from './InfoCard.css';

const InfoCard = ({ header, children }) => (
  <div className={styles["info-card"]}>
  	<div className={styles["content-wrapper"]}>
  		<h3 className={styles.header}>{header}</h3>
  		<hr className={styles.hr}/>
	  	{children}
	  </div>
  </div>
);

export default InfoCard;