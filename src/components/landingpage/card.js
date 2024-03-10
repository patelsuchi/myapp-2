import React from 'react';
import './style.css'; // Import your CSS file or define styles in your component file

const YourComponent = () => {
  const data = [
    {
      title: 'web designer',
      content: 'We can proudly say that we are table toppers in web designing.',
      imageUrl: 'android.png',
      exploreLink: '/web-designer',
    },
    {
        title: 'web designer',
        content: 'We can proudly say that we are table toppers in web designing.',
        imageUrl: 'android.png',
        exploreLink: '/web-designer',
      },
      {
        title: 'web designer',
        content: 'We can proudly say that we are table toppers in web designing.',
        imageUrl: 'android.png',
        exploreLink: '/web-designer',
      },
      {
        title: 'web designer',
        content: 'We can proudly say that we are table toppers in web designing.',
        imageUrl: 'android.png',
        exploreLink: '/web-designer',
      },
      {
        title: 'web designer',
        content: 'We can proudly say that we are table toppers in web designing.',
        imageUrl: 'android.png',
        exploreLink: '/web-designer',
      },
      {
        title: 'web designer',
        content: 'We can proudly say that we are table toppers in web designing.',
        imageUrl: 'android.png',
        exploreLink: '/web-designer',
      },
      
    // Add more data objects as needed
  ];

  return (
    <div className='wrapper'>
        <div class="h-bar"></div>

<div class="v-bar"></div>
<h2 className='main-heading'>TECHNOLOGIES</h2>
<p className='small-heading'>WE BELIEVE IN LATEST</p>
      <div className="container">
        
        {data.map((card, index) => (
          <div key={index} className="box" style={{ background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('${card.imageUrl}') no-repeat center center ` }}>
            <h1>{card.title}</h1>
            <p>{card.content}</p>
            <a  href={card.exploreLink} className="explore-btn">Explore</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourComponent;
