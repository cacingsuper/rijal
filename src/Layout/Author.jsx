import React, { Component, Fragment } from "react";
import AuthorCard from "./../Components/Card/AuthorCard";
import Database from "../Database/database.json";

class Author extends React.Component {
  state = {
    database: Database,
    authors: Database[2].data,
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <h1>Author</h1>
          </div>
          <div className="row d-flex flex-wrap">
            {this.state.authors.map((array) => (
              <AuthorCard data={array} key={array.id} />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Author;
