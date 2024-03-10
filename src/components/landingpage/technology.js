import React from 'react';
import './style.css'; // Import the CSS file

const ImageAndTextLayout = () => {
  const imageSources = [
    'image 6.png',
    'Android.png',
    'App Store.png',
    'Atom.png',
    'Php.png',
    'Python.png',
    'Node js.png',
    'Mysql.png',
    'Html.png',
    'css 3.png',
    
  ];

  return (
    <div className='wrapper'>
        <div class="h-bar"></div>

<div class="v-bar"></div>
<h2 className='main-heading'>TECHNOLOGIES</h2>
<p className='small-heading'>WE BELIEVE IN LATEST</p>

    <div className="technology-container">
      <div className="technology-image">
        {imageSources.map((source, index) => (
          <img key={index} src={source} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <div className="technology-text">
        <p>With the use of many popular and strong framework we are building reliable solutions for your business</p>
      </div>
    </div>
    </div>
  );
};

export default ImageAndTextLayout;
