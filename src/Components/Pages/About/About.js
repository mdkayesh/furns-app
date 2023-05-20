import React from "react";
import SectionHero from "../../SectionHero";
import UseDocumentTitle from "../../UseDocumentTitle";

const About = () => {
  UseDocumentTitle("About");
  return (
    <>
      <SectionHero heading={"About us"} />
      <section className="about">
        <h1 className="container">
          Furns is a global furniture destination for somethings. We sell
          cutting-edge furniture and offer a wide variety of fashion-related
          content.
        </h1>
        <div className="row">
          <div className="col-12 col-md-6">
            <figure>
              <img
                src="https://furns-react.netlify.app/nextimg/%2Fimages%2Fabout%2F02.jpg/1920/75?url=%2Fimages%2Fabout%2F02.jpg&w=1920&q=75"
                alt="about img"
              />
            </figure>
          </div>
          <div className="col-12 col-md-6">
            <figure>
              <img
                src="https://furns-react.netlify.app/nextimg/%2Fimages%2Fabout%2F01.jpg/1920/75?url=%2Fimages%2Fabout%2F01.jpg&w=1920&q=75"
                alt="about img"
              />
            </figure>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row gap-1">
              <div className="col-12 col-lg-6">
                <h2>OUR STORES</h2>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse. Lorem
                  ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                  eiusmod tempor.
                </p>
              </div>
              <div className="col-12 col-lg-6">
                <h2>OUR MISSION</h2>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse. Lorem
                  ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                  eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
