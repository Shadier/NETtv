import React from 'react';
import './assets/css/App.css';
import './assets/css/header.css';
import './assets/css/body.css';
import './assets/css/footer.css';
import './assets/css/movie.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import BodyComponent from './components/BodyComponent';
import AboutComponent from './components/AboutComponent';
function Home() {
  return <BodyComponent />
}
function AboutUs() {
  return <AboutComponent />
}
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Top Series</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
          </ul>
        </nav>
        
    <HeaderComponent />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
    <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
