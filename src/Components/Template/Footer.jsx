import React, { Component, Fragment } from "react";
import "./Footer.css";
const Footer = (props) => {
  return (
    <Fragment>
      <div className="footer container-fluid p-4 m-0">
        <div className="container text-light">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-4">
              <h1>Code Play</h1>
              <p className="text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
                blanditiis animi nisi facilis? Odit earum numquam illum veniam
                dolor deserunt possimus ullam incidunt fuga libero! Illo commodi
                officia nesciunt ab?
              </p>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="d-flex justify-content-center align-content-center">
          <h5 className="text-light m-4">&copy; 2020 Code Playlist</h5>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
