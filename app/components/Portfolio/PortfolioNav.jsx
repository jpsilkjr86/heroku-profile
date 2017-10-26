// imports react component classes
import React from 'react';
import { Link } from 'react-router-dom';

import Card from './PortfolioItems/cards/Card';
import HorizontalCard from './PortfolioItems/cards/HorizontalCard';
import PortfolioNavGroup from './PortfolioNav/PortfolioNavGroup';
import PortfolioNavGroupItem from './PortfolioNav/PortfolioNavGroupItem';

import imgSrc from './PortfolioItems/img/portfolio-portrait.jpg';

import styles from './PortfolioNav.css';

const PortfolioNav = ({ routes, horizontal }) => {
	// WhichCard is determined by value of horizontal prop
  const WhichCard = horizontal ? HorizontalCard : Card;

  return (
    <div className={styles.wrapper}>
      <WhichCard imgSrc={imgSrc}>
    		<div className="text-center">
    			<PortfolioNavGroup>
    				{/* create a set of links by iterating through props.routes */}
    				{ routes.map(({path, title}) => (
    	      	<Link to={path} key={path}>
    	      		<PortfolioNavGroupItem thisPath={path} horizontal={horizontal}>
                  {title}
                </PortfolioNavGroupItem>
    	      	</Link>
    	      ))}
    		  </PortfolioNavGroup>
    	  </div>
      </WhichCard>
    </div>
  )
};

export default PortfolioNav;