import React from "react";
import "./style.css"; // Import your CSS file

const images = [
  "safe.png",
  "soor.png",
  "img3.png",
  "kmall.png",
  "gate.png",
  "safe.png",
  "soor.png",
  "img3.png",
  "kmall.png",
  "gate.png",
  "safe.png",
  "soor.png",
  "img3.png",
  "kmall.png",
  "gate.png",
];

const App = () => {
  return (
    <div className="wrapper">
      <div class="hr-bar"></div>

      <div class="v-bar"></div>
      <h2 className='main-heading'>CLIENTS</h2>
<p className='small-heading'>THEY TRUST US</p>
      <div className="client-container">
        {images.map((image, index) => (
          <div key={index} className="item">
            <img
              className="client-img"
              src={image}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
