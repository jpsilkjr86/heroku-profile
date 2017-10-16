// imports react component classes
import React, { Component } from 'react';

// child component
import Portfolio from './PageTheme/Portfolio';

import styles from './PageTheme.css';

// generate themes array using styles css data and inserting UI names
const themes = [{
	name: 'Kaohsiung',
	style: styles.kaohsiung
},{
	name: 'Taipei',
	style: styles.taipei
},{
	name: 'Metro',
	style: styles.metro
}];

// generate themeNames by reducing the names out of themes array
const themeNames = themes.reduce((prev, current) => {
	prev.push(current.name);
	return prev;
}, []);


// PageTheme takes care of all CSS theme content and logic
class PageTheme extends Component {
  // declares initial state without constructor
	state = {
		currentTheme: 0
	}

	handleChangeTheme = selected => {
		selected !== this.state.currentTheme && this.setState({currentTheme: selected});
	}

	render() {
		return (
			<div className={styles.page + " " + themes[this.state.currentTheme].style}>
	    	<Portfolio
	    		handleChangeTheme={this.handleChangeTheme}
	    		themes={themeNames}
	    	/>
	    </div>
		);
	}
}

export default PageTheme;