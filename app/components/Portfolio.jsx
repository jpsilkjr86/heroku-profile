// imports react component classes
import React, { Component } from 'react';

// children components
import Header from './Portfolio/Header';
import Main from './Portfolio/Main';
import Footer from './Portfolio/Footer';

import { page } from './styles/page.css';

// saves themes array as single source of truth about css for this component
const themes = [{
	name: 'Kaohsiung',
	fileName: 'kaohsiung.css'
},{
	name: 'Taipei',
	fileName: 'taipei.css'
},{
	name: 'Metro',
	fileName: 'metro.css'
}];

// generates themeNames by reducing the names out of themes array. [] is initialValue
const themeNames = themes.reduce((prev, current) => [...prev, current.name], []);

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
				<Header key="header" handleChangeTheme={this.handleChangeTheme} themes={themeNames}/>,
				<Main key="main"/>,
				<Footer key="footer"/>
			</PageTheme>
		);
	}
}

export default Portfolio;