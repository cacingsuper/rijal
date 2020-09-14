import React, { Component, Fragment } from "react";
import { Image } from "react-bootstrap";
import Framework from "./../Components/Card/Framework";

class Home extends React.Component {
  state = {
    fronts: [
      {
        id: 1,
        title: "React",
        lang: "JS",
        img: "https://cdn.auth0.com/blog/react-js/react.png",
      },
      {
        id: 2,
        title: "Vue",
        lang: "JS",
        img: "https://vuejs.org/images/logo.png",
      },
      {
        id: 3,
        title: "Angular",
        lang: "JS",
        img:
          "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg",
      },
      {
        id: 4,
        title: "Next",
        lang: "JS",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png",
      },
    ],
    backs: [
      {
        id: 1,
        title: "Node JS",
        lang: "javascript",
        img:
          "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
      },
      {
        id: 2,
        title: "Laravel",
        lang: "PHP",
        img:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
      },
      {
        id: 3,
        title: "Codeigniter",
        lang: "PHP",
        img:
          "https://www.shareicon.net/data/2015/10/11/119658_development_431x512.png",
      },
      {
        id: 4,
        title: "Flask",
        lang: "Python",
        img: "https://flask-training-courses.uk/images/flask-logo.png",
      },
    ],
  };

  render() {
    console.log(this.state.frameworks);
    return (
      <Fragment>
        <div className="container">
          <h1 className="text-center text-light m-5">
            Try To Learn Something New?
          </h1>
          <div className="row d-flex flex-wrap justify-content-center">
            {this.state.fronts.map((array) => (
              <Framework data={array} />
            ))}
          </div>
          <div className="row d-flex flex-wrap justify-content-center">
            {this.state.backs.map((array) => (
              <Framework data={array} />
            ))}
          </div>

          <div className="row d-flex flex-wrap justify-content-center">
            <div className="col-lg-6 text-light">
              <div className="m-5">
                <h1>Mempermudah Untuk Belajar Coding</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore, animi!
                </p>
              </div>
            </div>
            <div className="col-lg-6 p-5">
              <Image
                style={{ width: "100%" }}
                className="img"
                src="https://raw.githubusercontent.com/cacingsuper/wallpaper/master/computer2.png"
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Home;
