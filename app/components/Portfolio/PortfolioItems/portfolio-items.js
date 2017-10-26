// imports react component classes
import React from 'react';

import { Row, Col, Clearfix } from 'react-bootstrap';

// imports custom components
import AboutMe from './AboutMe';
import Card from './cards/Card';
import ImgCollapseCard from './cards/ImgCollapseCard';

// imports individual project components
import { 
	YouQueueReact, YouQueueLite, MovieBuffHub, ArticleSaver, NYTReact, Hangman, Trivia, RPSMultiplayer
} from './projects';

// returns true for every 2nd array index (n=1, n=3, n=5...)
const everySecondElement = n => ((n + 1) % 2) == 0;
// returns true for every 3rd array index (n=2, n=5, n=8...)
const everyThirdElement = n => ((n + 1) % 3) == 0;

// function that creates components by taking in projectList array prop
const PortfolioItem = ({ projectList }) => (
	<Row className="show-grid">
		{ // iterates through projectList and wraps them in columns
			projectList
				.map((Project, i) => (
					<Col xs={12} sm={6} md={4} key={i}>
						<Project/>
					</Col>
				)) // then takes array of columns and adds Sm and Md clearfixes in proper places
				.reduce((array, Current, j) => {
					if (everySecondElement(j)) {
						return [...array, Current, <Clearfix visibleSmBlock key={`clearfix${j}`}/>]
					}
					if (everyThirdElement(j)) {
						return [...array, Current, <Clearfix visibleMdBlock key={`clearfix${j}`}/>]
					}
					return [...array, Current]
				}, []) // empty array is initialValue of .reduce
		}
	</Row>
);

// creates <PortfolioItem>s by feeding them projectList array prop
const Featured = () => (
	<PortfolioItem
		projectList={[YouQueueReact, ArticleSaver, NYTReact]}
	/>
);

const MyWorks = () => (
	<PortfolioItem
		projectList={[
			YouQueueReact, ArticleSaver, MovieBuffHub, NYTReact, YouQueueLite, RPSMultiplayer, Hangman, Trivia
		]}
	/>
);

const Collaborations = () => (
	<PortfolioItem
		projectList={[YouQueueReact, YouQueueLite, MovieBuffHub]}
	/>
);

const Games = () => (
	<PortfolioItem
		projectList={[Hangman, Trivia, RPSMultiplayer]}
	/>
);

const ExternalLinks = props => <Card>ExternalLinks</Card>;

const projectItems = { Featured, AboutMe, MyWorks, Collaborations, Games, ExternalLinks };

module.exports = projectItems;