import React from "react";
import { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import "./Style/main.scss";
import "bootstrap/dist/css/bootstrap.css";

//
import Alert from "./Components/Alert/AlertDis";
import Footer from "./Components/Template/Footer";
import Menu from "./Layout/Menu";

function App() {
  return (
    <div>
      {/* <Alert /> */}
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
