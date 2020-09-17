import React, { Component, Fragment } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//
import Home from "./Home";

import Trending from "./Trending";
import Author from "./Author";
import AuthorDetail from "./AuthorDetail";
//

class Menu extends React.Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div className="container">
            <div id="menu">
              <div>
                <Navbar variant="dark" expand="lg">
                  <Navbar.Brand href="#home">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="logo"
                    />
                  </Navbar.Brand>
                  <Navbar.Brand href="#home">Playlist</Navbar.Brand>

                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Link className="nav-link test" to="/">
                        Home
                      </Link>
                      <Link className="nav-link" to="/trending">
                        Trending
                      </Link>
                      <Link className="nav-link" to="/author">
                        Author
                      </Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/trending">
                <Trending />
              </Route>
              <Route path="/author" exact>
                <Author />
              </Route>
              <Route path="/author/:id" component={AuthorDetail}></Route>
            </Switch>
          </div>
        </Router>
      </Fragment>
    );
  }
}
export default Menu;
