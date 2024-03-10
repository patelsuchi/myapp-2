// MainComponent.js
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
        {leftContent.languages.map((language, index) => (
          <img key={index} src={language} alt="" />
        ))}
      </div>
    </div>
    <div className="portfolio-right">
      <div className="v-bar"></div>
      <img src={rightContent.imageSrc} alt="" />
    </div>
  </div>
);

const MainComponent = () => {
  const content1 = {
    leftContent: {
      text: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, id eum minima repudiandae in qui doloribus, esse vero illo maxime voluptatibus iure, illum placeat voluptate ipsam. Veritatis sequi animi fuga accusamus nobis aperiam odio, aut tempore beatae libero quas distinctio.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, id eum minima repudiandae in qui doloribus, esse vero illo maxime voluptatibus iure, illum placeat voluptate ipsam. Veritatis sequi animi fuga accusamus nobis aperiam odio, aut tempore beatae libero quas distinctio.',
      ],
      languages: ['/Android.png', '/Php.png', '/Mysql.png'], // Adjust the paths based on your public folder structure
    },
    rightContent: {
      imageSrc: '/logo.png', // Adjust the path based on your public folder structure
    },
  };

  const content2 = {
    // Provide content for the second set of components
  };

  const content3 = {
    // Provide content for the third set of components
  };

  return (
    <div>
      <PortfolioComponent {...content1} />
      <PortfolioComponent {...content2} />
      <PortfolioComponent {...content3} />
    </div>
  );
};

export default MainComponent;
