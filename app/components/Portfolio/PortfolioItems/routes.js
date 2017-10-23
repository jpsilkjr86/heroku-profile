// imports react component classes
import React from 'react';

import { Panel } from 'react-bootstrap';

// import custom components
import AboutMe from './AboutMe';
import Card from './cards/Card';
import HorizontalCard from './cards/HorizontalCard';

import imgSrc from './img/portfolio-portrait.jpg';

const Featured = props => <Card>Featured</Card>;
const MyWorks = props => <HorizontalCard imgSrc={imgSrc}>MyWorks</HorizontalCard>;
const Collaborations = props => <Card>Collaborations</Card>;
const Games = props => <Card>Games</Card>;
const ExternalLinks = props => <Card>ExternalLinks</Card>;

// saves routes array
const routes = [
	{ path: '/featured', component: Featured, title: 'Featured Works' },
	{ path: '/about', component: AboutMe, title: 'About Me' },
	{ path: '/myworks', component: MyWorks, title: 'My Works' },
	{ path: '/collaborations', component: Collaborations, title: 'Collaborations' },
	{ path: '/games', component: Games, title: 'Games' },
	{ path: '/links', component: ExternalLinks, title: 'External Links' }
];

module.exports = routes;