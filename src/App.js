import logo from "./logo.svg";
import Navbar from "./components/NavBar";
import News from "./components/News";
import About from "./components/About";
import "./App.css";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter as Router

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            {/* <Route exact path="/" Component={News} /> */}
            <Route
              exact
              path="/"
              Component={(props) => (
                <News {...props} country="in" category="general" />
              )}
            />
            <Route
              exact
              path="/business"
              Component={(props) => (
                <News {...props} country="in" category="business" />
              )}
            />
            <Route
              exact
              path="/entertainment"
              Component={(props) => (
                <News
                  {...props}
                  country="in"
                  category="entertainment"
                  pageSize={20}
                />
              )}
            />
            <Route
              exact
              path="/general"
              Component={(props) => (
                <News
                  {...props}
                  country="in"
                  category="general"
                  pageSize={20}
                />
              )}
            />
            <Route
              exact
              path="/health"
              Component={(props) => (
                <News {...props} country="in" category="health" pageSize={20} />
              )}
            />
            <Route
              exact
              path="/science"
              Component={(props) => (
                <News
                  {...props}
                  country="in"
                  category="science"
                  pageSize={20}
                />
              )}
            />
            <Route
              exact
              path="/sports"
              Component={(props) => (
                <News {...props} country="in" category="sports" pageSize={20} />
              )}
            />
            <Route
              exact
              path="/technology"
              Component={(props) => (
                <News
                  {...props}
                  country="in"
                  category="technology"
                  pageSize={20}
                />
              )}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
