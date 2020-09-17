import React, { Fragment } from "react";
import Database from "../Database/database.json";
import { Image } from "react-bootstrap";
import "./../Style/author-detail.scss";
import PlaylistCard from "../Components/Card/PlaylistCard";
class AuthorDetail extends React.Component {
  constructor(props) {
    super();
    this.state = {
      database: Database,
      authors: Database[2].data,
      videos: Database[4].data,
      data: {
        author: {},
        playlists: [],
        videos: [],
      },
    };
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
    return (
      <Fragment>
        <div className="container text-light">
          <div className="d-flex justify-content-center align-items-center">
            <div className="avatar-1">
              <Image
                fluid
                className="avatar-channel"
                roundedCircle
                src={this.state.data.author.channel_img}
              ></Image>
            </div>
            <div className="avatar-2">
              <h1 className="text-light">
                {this.state.data.author.channel_name}
              </h1>
              <p className="text-light">{this.state.data.author.realname}</p>
            </div>
          </div>
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

export default AuthorDetail;
