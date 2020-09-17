import React, { Component, Fragment } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./AuthorCard.css";

function AuthorCard(props) {
  return (
    <Fragment>
      <div className="author-card text-light">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.data.channel_img} />
          <Card.Body>
            <Card.Title>{props.data.channel_name}</Card.Title>
            <Card.Text>
              {props.data.realname}
              <Card.Link href={props.data.chanel_url}></Card.Link>
            </Card.Text>
            <Button variant="primary">
              <Link to={"/author/" + props.data.id}>Author</Link>
            </Button>
            <Button variant="danger">Youtube</Button>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
}

export default AuthorCard;
