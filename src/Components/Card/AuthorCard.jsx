import React, { Component, Fragment } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./AuthorCard.scss";

function AuthorCard(props) {
  return (
    <Fragment>
      <div className="author-card text-light">
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={props.data.channel_img} />
          <Card.Body>
            <Card.Title>{props.data.channel_name}</Card.Title>
            <Card.Text>
              <Card.Link className="author-link" href={props.data.channel_url}>
                {props.data.realname}
              </Card.Link>
            </Card.Text>
            <Button variant="dark" size="sm">
              <Link
                className="author-link"
                to={"/author/" + props.data.slug_channel_name}
              >
                Author
              </Link>
            </Button>
            <a
              href={"/" + props.data.channel_url}
              className="btn btn-dark btn-sm"
            >
              YouTube
            </a>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
}

export default AuthorCard;
