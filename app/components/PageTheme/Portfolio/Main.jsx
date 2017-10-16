// imports react component classes
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Button } from 'react-bootstrap';


const Main = ({foo}) => (
  <div>
    <h1>Hello, {foo}!</h1>
    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p><Button bsStyle="primary">Learn more</Button></p>
  </div>
);

export default Main;