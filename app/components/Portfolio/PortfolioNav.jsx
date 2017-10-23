// imports react component classes
import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';
import { Collapse } from 'reactstrap';

import Card from './PortfolioItems/cards/Card';
import HorizontalCard from './PortfolioItems/cards/HorizontalCard';
import PortfolioNavGroup from './PortfolioNav/PortfolioNavGroup';
import PortfolioNavGroupItem from './PortfolioNav/PortfolioNavGroupItem';

import imgSrc from './PortfolioItems/img/portfolio-portrait.jpg';

const PortfolioNav = ({ routes, horizontal }) => {
	// WhichCard is determined by value of horizontal prop
  const WhichCard = horizontal ? HorizontalCard : Card;

  return (
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
  )
};

export default PortfolioNav;