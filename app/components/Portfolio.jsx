// imports react component classes
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { string } from 'prop-types';

// children components
import Header from './Portfolio/Header';
import Main from './Portfolio/Main';
import Footer from './Portfolio/Footer';

import styles from './Portfolio.css';

// declares Portfolio component as ES6 class, which will be this file's export
class Portfolio extends Component {
  // declares initial state without constructor
	state = {
		foo: 'bar'
	}

	// defaultProps and propTypes at top of component for easy reference
	static defaultProps = {
    fizz: 'fazz',
    hey: 'hi'
  }
  static propTypes = {
    fizz: string.isRequired,
    hey: string
  }
	// uses arrow function for defining handlers to avoid need for binding *this*
	handleClick = e => {
		console.log(this);
		console.log(e.target);
	}

	render() {
		console.log(this.props);
		return (
	    <div className={styles.kaohsiung}>
				<Header/>
				<Main
					foo={this.state.foo}
					handleClick={this.handleClick}
				/>
				<Footer />
	    </div>
		);
	}
}

// exports Portfolio component for other files to use
export default Portfolio;