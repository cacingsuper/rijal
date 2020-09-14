import React, { Component, Fragment } from "react";
import AuthorCard from "./../Components/Card/AuthorCard";

class Author extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <h1>Author</h1>
          </div>
          <div className="row d-flex flex-wrap justify-content-center">
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Author;
