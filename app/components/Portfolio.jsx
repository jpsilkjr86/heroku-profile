// imports react component classes
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

// declares Portfolio component as ES6 class, which will be this file's export
class Portfolio extends Component {
	constructor() {
		super();

		// set initial state
    this.state = {
			foo: 'bar'
		};
	}

	render() {
		return (
	    <div>
				<h1>{this.state.foo}</h1>
	    </div>
		);
	}
}

// exports Portfolio component for other files to use
export default Portfolio;