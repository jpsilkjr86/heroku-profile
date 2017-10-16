// principle react dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// imports PageTheme parent component
import PageTheme from './components/PageTheme';

// renders Router as wrapper to PageTheme parent and replaces div "#app" with it
render(<Router><PageTheme/></Router>, document.getElementById("app"));