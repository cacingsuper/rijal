import React, { Component, Fragment } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function AuthorCard(props) {
  return (
    <Fragment>
      <div class="card" style={cards}>
        <img
          class="card-img-top"
          src="https://picsum.photos/200/300"
          alt="Card image cap"
        ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </Fragment>
  );
}

const cards = { width: "16rem", margin: "0.5rem" };
export default AuthorCard;
