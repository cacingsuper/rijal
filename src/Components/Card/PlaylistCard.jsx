import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PlaylistCard.scss";
function PlaylistCard(props) {
  return (
    <Fragment>
      <div className="playlist-card">
        <Card className="card">
          <div className="thumb">
            <span className="time">20.00</span>
            <Card.Img variant="top" src={props.data.thumbnail_video} />
          </div>
          <div className="overlay">
            <span>PLAY</span>
          </div>
          <Card.Body>
            <Card.Title className="title">
              <Link to={props.url + "/" + props.data.id_video}>
                {props.data.title_video}
              </Link>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </Fragment>
  );
}

export default PlaylistCard;
