// imports react component classes
import React, { Component } from 'react';

// children components
import Header from './Portfolio/Header';
import Main from './Portfolio/Main';
import Footer from './Portfolio/Footer';
import AboutMe from './Portfolio/PortfolioItems/AboutMe';

import { page } from './styles/page.css';

import { Panel } from 'react-bootstrap';

// saves themes array as single source of truth about css for this component
const themes = [
	{ name: 'Kaohsiung', fileName: 'kaohsiung.css' },
	{ name: 'Taipei', fileName: 'taipei.css' },
	{ name: 'Metro', fileName: 'metro.css' }
];

// themeNames is an array of .name values from themes. [] is initialValue of reduce.
const themeNames = themes.reduce((prev, current) => [...prev, current.name], []);

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

// declares PageTheme wrapper
const PageTheme = ({theme, children}) => (
	<div className={page + " " + theme.bkg}>
		{children}
	</div>
);

// Portfolio is the parent component to the rest of the app and the primary state-holder
class Portfolio extends Component {
  // declares initial state without constructor
	state = {
		// default language set to English
		language: 'English',
		// index refers to index of themes array above
		themeIndex: 0,
		// default imported theme is index 0 of themes array
		theme: require(`./styles/${themes[0].fileName}`)
	}

	handleChangeTheme = selectedIndex => {
		// only updates theme state if selectedIndex is different from themeIndex.
		// in React v16, if setState returns null then it will not trigger an update.
		// (https://github.com/facebook/react/releases)
		this.setState(prevState => (
			selectedIndex !== prevState.themeIndex && {
				themeIndex: selectedIndex,
				// imports selected css theme according to selectedIndex
				theme: require(`./styles/${themes[selectedIndex].fileName}`)
			})
		);
	}

	render() {
		const { theme, language } = this.state;
		console.log('Portfolio renders');
		return (
			<PageTheme theme={this.state.theme}>
				<Header handleChangeTheme={this.handleChangeTheme} themes={themeNames}/>,
				<Main routes={routes}/>,
				<Footer/>
			</PageTheme>
		);
	}
}

export default Portfolio;