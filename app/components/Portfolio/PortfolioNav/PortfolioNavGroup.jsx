// imports react component classes
import React from 'react';

import styles from './PortfolioNavGroup.css';

const PortfolioNavGroup = ({ children }) => (
  <div className={styles.group}>
  	{children}
  </div>
);

export default PortfolioNavGroup;