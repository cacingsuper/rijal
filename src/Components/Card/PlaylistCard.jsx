import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import "./PlaylistCard.scss";
function PlaylistCard(props) {
  return (
    <Fragment>
      <div className="playlist-card">
        <Card className="card">
          <div className="thumb">
            <Card.Img variant="top" src={props.data.thumbnail_video} />
            <span className="time">20.00</span>
          </div>
          <div className="overlay">
            <span>PLAY</span>
          </div>
          <Card.Body>
            <Card.Title className="title">{props.data.title_video}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
}

export default PlaylistCard;
