// imports react component classes
import React from 'react';

// imports custom components
import ImgCollapseCard from './cards/ImgCollapseCard';

// imports img assets
import youqueue from './img/youqueue.jpg';
import articleSaver from './img/article-saver.jpg';
import hangman from './img/hangman.jpg';
import trivia from './img/trivia.jpg';
import nytreact from './img/nyt-react.jpg';
import rpsmultiplayer from './img/rps-multiplayer.jpg';
import movieBuffHub from './img/movie-buff-hub.jpg';

const YouQueueReact = () => (
	<ImgCollapseCard
		imgSrc={youqueue}
		githubLink={'https://github.com/jpsilkjr86/youqueue-react'}
		deployedLink={'https://morning-spire-70373.herokuapp.com/'}
		title={'You-Queue (React!)'}
		description={<p>Full-stack MERN app providing queue-management interface for restaurants.</p>}
	/>
);

const YouQueueLite = () => (
	<ImgCollapseCard
		imgSrc={youqueue}
		githubLink={'https://github.com/jpsilkjr86/you-queue'}
		deployedLink={'https://intense-journey-46722.herokuapp.com/'}
		title={'You-Queue (Lite)'}
		description={<p>Earlier version of You-Queue before the React migration, using Sequelize ORM and Handlebars templating engine run on Node/Express.</p>}
	/>
);

const MovieBuffHub = () => (
	<ImgCollapseCard
		imgSrc={movieBuffHub}
		githubLink={'https://github.com/jpsilkjr86/Movie-Buff-Hub-Project'}
		deployedLink={'https://jpsilkjr86.github.io/Movie-Buff-Hub-Project/'}
		title={'Movie Buff Hub'}
		description={<p>Front-end app that displays movie information according to user searches by querying movie database APIs. Uses Materialize CSS framework, Firebase (NoSQL), Event-Driven Programming (through jQuery and Firebase event callbacks)</p>}
	/>
);

const ArticleSaver = () => (
	<ImgCollapseCard
		imgSrc={articleSaver}
		githubLink={'https://github.com/jpsilkjr86/article-saver'}
		deployedLink={'https://immense-lake-69616.herokuapp.com/'}
		title={'Article Saver'}
		description={<p>Full-stack Node/Express app using Mongoose ODM for managing MongoDB database and Passport.js for user authentication.</p>}
	/>
);

const NYTReact = () => (
	<ImgCollapseCard
		imgSrc={nytreact}
		githubLink={'https://github.com/jpsilkjr86/nyt-react'}
		deployedLink={'https://github.com/jpsilkjr86/nyt-react'}
		title={'NYTimes Search (React!)'}
		description={<p>Full-stack MERN app that allows users to search articles on the New York Times API and save articles for later viewing.</p>}
	/>
);

const Hangman = () => (
	<ImgCollapseCard
		imgSrc={hangman}
		githubLink={'https://github.com/jpsilkjr86/Hangman-App'}
		deployedLink={'https://jpsilkjr86.github.io/Hangman-App/'}
		title={'Hangman'}
		description={<p>Front-end game I made when I was first learning vanilla JavaScript. Have fun!</p>}
	/>
);

const Trivia = () => (
	<ImgCollapseCard
		imgSrc={trivia}
		githubLink={'https://github.com/jpsilkjr86/TriviaGame'}
		deployedLink={'https://jpsilkjr86.github.io/TriviaGame/'}
		title={'Trivia!'}
		description={<p>Front-end game I made when I was first learning jQuery and how to define objects using constructors. See how many answers you can get right!</p>}
	/>
);

const RPSMultiplayer = () => (
	<ImgCollapseCard
		imgSrc={rpsmultiplayer}
		githubLink={'https://github.com/jpsilkjr86/RPS-Multiplayer'}
		deployedLink={'https://jpsilkjr86.github.io/RPS-Multiplayer/'}
		title={'Rock, Paper, Scissors - Multiplayer!'}
		description={<p>Front-end game I made when I was first learning Google's Firebase API. Chat function is enabled, and you can even watch others play as an observer!</p>}
	/>
);

const projects = { 
	YouQueueReact, YouQueueLite, MovieBuffHub, ArticleSaver, NYTReact, Hangman, Trivia, RPSMultiplayer
};

module.exports = projects;