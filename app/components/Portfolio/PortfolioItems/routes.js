// imports react component classes
import React from 'react';

import { Panel, Row, Col } from 'react-bootstrap';

// import custom components
import AboutMe from './AboutMe';
import Card from './cards/Card';
import HorizontalCard from './cards/HorizontalCard';
import ImgCollapseCard from './cards/ImgCollapseCard';

import profile from './img/portfolio-portrait.jpg';
import youqueue from './img/youqueue.jpg';

const Featured = props => <Card>Featured</Card>;
const MyWorks = props => <HorizontalCard imgSrc={profile}>MyWorks</HorizontalCard>;

const Collaborations = props => (
	<Row>
		<Col xs={10} xsOffset={1} md={6} lg={4}>
			<ImgCollapseCard
				imgSrc={youqueue}
				link={'#'}
				subtext={<p>This is some subtext</p>}
			>
				<p>This is some reveal content</p>
			</ImgCollapseCard>
		</Col>
	</Row>
);

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