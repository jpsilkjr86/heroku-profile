// imports react component classes
import React from 'react';

import styles from './HorizontalCard.css';

const HorizontalCard = ({imgSrc, children}) => (
  <div className={styles["horizontal-card"]}>
    {imgSrc && <img src={imgSrc} className={styles["left-img"]}/>}
    <div className={styles.content}>
    	{children}
    </div>
  </div>
);

export default HorizontalCard;