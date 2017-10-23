// imports react component classes
import React from 'react';

import { Panel } from 'react-bootstrap';

// import custom components
import AboutMe from './AboutMe';

const Featured = props => <Panel>Featured</Panel>;
const MyWorks = props => <Panel>MyWorks</Panel>;
const Collaborations = props => <Panel>Collaborations</Panel>;
const Games = props => <Panel>Games</Panel>;
const ExternalLinks = props => <Panel>ExternalLinks</Panel>;

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