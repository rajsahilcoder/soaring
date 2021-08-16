// import './App.css';
import React, { Component } from "react";
// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import webData from "./webData";
import Header from './components/Header';
import Mission from './components/Mission';
import Portfolio from './components/Portfolio';
import PastPortfolio from './components/PastPortfolio';
import Team from './components/Team';
import Footer from './components/Footer';

import Timeline from './components/Timeline';



class App extends Component {
  render() {
    return (
      <>

        <div className="App">
          <Router>
            <Header />

            <Switch>
              <Route exact path ="/" >
                <Mission webData={webData} />
                <Portfolio webData={webData} />
                <PastPortfolio webData={webData} />
                <Team />
              </Route>
              <Route exact path ="/Timeline">
                <Timeline />
              </Route>
            </Switch>

            <Footer />
          </Router>

        </div>
      </>
    );
  }
}

export default App;
