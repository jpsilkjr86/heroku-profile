// imports react component classes
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { array, func } from 'prop-types';

// children components
import Header from './Portfolio/Header';
import Main from './Portfolio/Main';
import Footer from './Portfolio/Footer';

// Portfolio is the parent component to the rest of the app and the primary state-holder
class Portfolio extends Component {
  // declares initial state without constructor
	state = {
		foo: 'bar'
	}

	// defaultProps and propTypes at top of component for easy reference
	static defaultProps = {
    themes: []
  }
  static propTypes = {
    themes: array.isRequired,
    handleChangeTheme: func.isRequired
  }

	render() {
		const { handleChangeTheme, themes } = this.props;

		return (
	    <div>
				<Header handleChangeTheme={handleChangeTheme} themes={themes}/>
				<Main foo={this.state.foo} />
				<Footer />
	    </div>
		);
	}
}

export default Portfolio;