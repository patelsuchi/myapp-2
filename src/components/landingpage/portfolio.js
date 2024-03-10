// PortfolioComponent.js
import React from 'react';

const PortfolioComponent = ({ leftContent, rightContent }) => (
  <div className="container">
    <div className="portfolio-left">
      <div className="portfolio-text">
        {leftContent.text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="portfolio-languages">
        <h3>MADE WITH</h3>
        <div className="dotted-line"></div>
        {/* {leftContent.languages.map((language, index) => (
          <img key={index} src={language} alt="" />
        ))} */}
      </div>
    </div>
    <div className="portfolio-right">
      <div className="v-bar"></div>
      {/* <img src={rightContent.imageSrc} alt="" /> */}
    </div>
  </div>
);

export default PortfolioComponent;
