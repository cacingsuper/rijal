import React, { Component, Fragment } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./Framework.scss";

function Framework(props) {
  return (
    <Fragment>
      <div className="framework">
        <div className="card m-3">
          <span className="top"></span>
          <span className="bottom"></span>
          <span className="left"></span>
          <span className="right"></span>
          <img className="card-img" src={props.data.img} alt="framework"></img>
          <div className="card-body">
            <h3 className="card-title text-center">{props.data.title}</h3>
            <p className="text-center">{props.data.lang}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Framework;
