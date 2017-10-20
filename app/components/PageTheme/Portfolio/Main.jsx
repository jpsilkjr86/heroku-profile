// imports react component classes
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

import Media from 'react-media';

import ProjectNav from './Main/ProjectNav';

const Main = props => (
  <main>
    <Grid>
    	<Route path="/" component={ProjectNav}/>
    </Grid>
  </main>
);

export default Main;