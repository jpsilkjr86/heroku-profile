// imports react component classes
import React from 'react';

import { Row, Col, Clearfix } from 'react-bootstrap';

// imports custom components
import AboutMe from './AboutMe';
import Card from './cards/Card';
import HorizontalCard from './cards/HorizontalCard';
import ImgCollapseCard from './cards/ImgCollapseCard';

// imports img assets
import profile from './img/portfolio-portrait.jpg';

// imports individual project components
import { YouQueueReact, YouQueueLite, MovieBuffHub, ArticleSaver, NYTReact } from './projects';

const everySecondElement = n => ((n + 1) % 2) == 0;
const everyThirdElement = n => ((n + 1) % 3) == 0;

// function that creates components by taking in projectList array prop
const PortfolioItem = ({ projectList }) => (
	<Row className="show-grid">
		{ projectList
				.map((Project, i) => (
					<Col xs={8} sm={6} md={4} key={i}>
						<Project/>
					</Col>
				))
				.reduce((array, Current, j) => {
					console.log(array);
					if (everySecondElement(j)) {
						return [...array, Current, <Clearfix visibleSmBlock key={`clearfix${j}`}/>]
					}
					if (everyThirdElement(j)) {
						return [...array, Current, <Clearfix visibleMdBlock key={`clearfix${j}`}/>]
					}
					return [...array, Current]
				}, [])
		}
	</Row>
);

// // creates <Clearfix visibleSmBlock/> if n is non-zero and odd
// function createSmClearfix(n) {
// 	if (n > 0 && ((n % 2) > 0)) {
// 		return <Clearfix visibleSmBlock/>;
// 	}
// 	// returns null by default
// 	return null;
// }

// // creates <Clearfix visibleMdBlock/> if n is non-zero and even
// function createMdClearfix(n) {
// 	if (n > 0 && ((n % 2) === 0)) {
// 		return <Clearfix visibleMdBlock/>;
// 	}
// 	// returns null by default
// 	return null;
// }

// // function that creates components by taking in projectList array prop
// const PortfolioItem = ({ projectList }) => (
// 	<Row>
// 		{ projectList.map((Project, i) => (
// 			<Col xs={10} xsOffset={1} sm={6} md={4} key={i}>
// 				<Project/>
// 			</Col>
// 			{/* includes Clearfix for columns to stack properly in different screens */}
// 			{createSmClearfix(i) }
// 			{createMdClearfix(i) }
// 		))}
// 	</Row>
// );

// // function that creates components by taking in projectList array prop
// const PortfolioItem = ({ projectList }) => (
// 	<Row>
// 		{ projectList.map((Project, i) => (
// 			// include Clearfix for columns to stack properly
// 			<Col xs={10} xsOffset={1} sm={6} md={4} key={i}>
// 				<Project/>
// 			</Col>
// 		)) }
// 	</Row>		
// );

// creates <PortfolioItem>s by feeding them projectList array prop
const Featured = () => (
	<PortfolioItem
		projectList={[YouQueueReact, ArticleSaver, NYTReact]}
	/>
);

const MyWorks = () => (
	<PortfolioItem
		projectList={[YouQueueReact, ArticleSaver, MovieBuffHub, NYTReact, YouQueueLite]}
	/>
);

const Collaborations = () => (
	<PortfolioItem
		projectList={[YouQueueReact, YouQueueLite, MovieBuffHub]}
	/>
);

const Games = props => <Card>Games</Card>;

const ExternalLinks = props => <Card>ExternalLinks</Card>;

const projectItems = { Featured, AboutMe, MyWorks, Collaborations, Games, ExternalLinks };

module.exports = projectItems;