// imports react component classes
import React from 'react';

import styles from './LinkCard.css';

const LinkCard = ({screenshot, icon, href}) => (
  <a className={styles["link-card"]} href={href} target="_blank">
    <img src={screenshot} className={styles.img}/>
    <div className={styles.right}>
   		<img src={icon} className={styles.icon}/>
    </div>
  </a>
);

export default LinkCard;