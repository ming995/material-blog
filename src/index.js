import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
// import About from './About/About';
import {Route, BrowserRouter as Router} from "react-router-dom"; 
// import { Router, Route } from "react-router";


ReactDOM.render(
    <Router>
        <Route path="/" component={App}></Route>
        {/* <Route path="/about" component={App}></Route> */}
    </Router>
  , document.getElementById('root'));

