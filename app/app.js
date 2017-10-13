// principle react dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// imports Portfolio parent component
import Portfolio from './components/Portfolio.jsx';

// renders Router as wrapper to Portfolio parent and replaces div "#app" with it
render(<Router><Portfolio/></Router>, document.getElementById("app"));