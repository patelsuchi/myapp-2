import React from "react";
import "./style.css";

const hero = () => {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-container">
          <div className="hero-left">
            <img src="./hero1.png" height="150px" width="150px"></img>

            <h1 className="hero-heading">
              No. 1 Web Development Company In India
            </h1>
            <p className="hero-text">
              From over 7 years we are serving the quality tech solutions to
              business in india. We have archived some really powerful numbers
              to inidcate.
            </p>
            <button>Explore More</button>
          </div>
          <div className="hero-right">
            <img src="./hero2.png"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default hero;
