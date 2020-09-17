import React, { Fragment, Component, useState } from "react";
import { Card } from "react-bootstrap";
// import Database from "../Database/database.json";
import Database from "../../Database/database.js";
import PlaylistCard from "../../Components/Card/PlaylistCard";

class Playlist extends Component {
  constructor(props) {
    super();
    this.state = Database;
  }

  componentDidMount() {
    let slug = this.props.match.params.slug;
    let id = this.state.authors.find(({ slug_channel_name }) => {
      if (slug_channel_name === `${slug}`) {
        return true;
      }
    });
    let author = this.state.authors.find(
      ({ slug_channel_name }) => slug_channel_name === `${slug}`
    );
    let videos = this.state.videos.filter(
      ({ author_id }) => author_id === id.id
    );

    this.setState({
      data: { ...this.state.data, author, videos },
    });
  }
  render() {
    console.log(this.state.data);
    return (
      <Fragment>
        <div className="playlist text-light">
          <h1>PLAYLIST</h1>
          <div className="row d-flex flex-wrap">
            {this.state.data.videos.map((array) => (
              <PlaylistCard
                url={this.state.data.author.slug_channel_name}
                data={array}
                key={array.id_video}
              />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Playlist;
