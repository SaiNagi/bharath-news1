import React, { Component } from "react";
import { Link } from "react-router-dom";

export class index extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            News(Logo)
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <Link to="/">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
              </Link>

              <Link to="/business">
                <li className="nav-item">
                  <a className="nav-link" href="Business">
                    Business
                  </a>
                </li>
              </Link>
              <Link to="/entertainment">
                <li className="nav-item">
                  <a className="nav-link" href="Entertainment">
                    Entertainment
                  </a>
                </li>
              </Link>
              <Link to="/general">
                <li className="nav-item">
                  <a className="nav-link" href="General">
                    General
                  </a>
                </li>
              </Link>
              <Link to="/health">
                <li className="nav-item">
                  <a className="nav-link" href="Health">
                    Health
                  </a>
                </li>
              </Link>
              <Link to="/science">
                <li className="nav-item">
                  <a className="nav-link" href="Science">
                    Science
                  </a>
                </li>
              </Link>
              <Link to="sports">
                <li className="nav-item">
                  <a className="nav-link" href="Sports">
                    Sports
                  </a>
                </li>
              </Link>
              <Link to="technology">
                <li className="nav-item">
                  <a className="nav-link" href="Technology">
                    Technology
                  </a>
                </li>
              </Link>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default index;
