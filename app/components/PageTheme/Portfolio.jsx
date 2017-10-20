// imports react component classes
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { array, func, object } from 'prop-types';

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
    theme: object.isRequired,
    handleChangeTheme: func.isRequired
  }

  // returns true except when props.theme changes
  shouldComponentUpdate(nextProps, nextState) {
  	return this.props.theme === nextProps.theme;
  }

	render() {
		const { handleChangeTheme, themes } = this.props;
		console.log('Portfolio renders');
		// now we can render an array of elements in React 16! need keys to avoid warnings though
		return [
			<Header key="header" handleChangeTheme={handleChangeTheme} themes={themes}/>,
			<Main key="main"/>,
			<Footer key="footer"/>
		];
	}
}

export default Portfolio;