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
				githubLink={'https://github.com/jpsilkjr86/youqueue-react'}
				deployedLink={'https://morning-spire-70373.herokuapp.com/'}
				title={'You-Queue (React!)'}
				description={<p>Full-stack MERN app providing queue-management interface for restaurants.</p>}
			/>
		</Col>
	</Row>
);

const Games = props => <Card>Games</Card>;
const ExternalLinks = props => <Card>ExternalLinks</Card>;

module.exports = { Featured, AboutMe, MyWorks, Collaborations, Games, ExternalLinks };