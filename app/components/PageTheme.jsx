// imports react component classes
import React, { Component } from 'react';

// child component
import Portfolio from './PageTheme/Portfolio';

import { page } from './styles/page.css';

// generate themes array using styles css data and inserting UI names
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

// generate themeNames by reducing the names out of themes array. [] is initialValue
const themeNames = themes.reduce((prev, current) => [...prev, current.name], []);

// PageTheme takes care of all CSS theme content and logic
class PageTheme extends Component {
  // declares initial state without constructor
	state = {
		// index refers to index of themes array above
		currentIndex: 0,
		// default imported theme is index 0
		currentTheme: require(`./styles/${themes[0].fileName}`)
	}

	handleChangeTheme = selectedIndex => {
		// only updates theme state if selectedIndex is different from currentIndex.
		// in React v16, if setState returns null then it will not trigger an update.
		// (https://github.com/facebook/react/releases)
		this.setState(prevState => (
			selectedIndex !== prevState.currentIndex && {
				currentIndex: selectedIndex,
				// imports selected css theme according to selectedIndex
				currentTheme: require(`./styles/${themes[selectedIndex].fileName}`)
			})
		);
	}

	render() {
		console.log(this.state);
		const { currentTheme } = this.state;
		return (
			<div className={page + " " + currentTheme.bkg}>
	    	<Portfolio
	    		handleChangeTheme={this.handleChangeTheme}
	    		themes={themeNames}
	    	/>
	    </div>
		);
	}
}

export default PageTheme;