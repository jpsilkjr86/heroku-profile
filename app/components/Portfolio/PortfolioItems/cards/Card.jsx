// imports react component classes
import React from 'react';

import styles from './Card.css';

const Card = ({imgSrc, children}) => (
  <div className={styles.card}>
    {imgSrc && <img src={imgSrc} width="100%"/>}
    <div>
    	{children}
    </div>
  </div>
);

export default Card;