import React, { useState } from "react";
import "./style.css"; // Import the CSS file or define styles in your component file

function Card() {
  const [cards] = useState([
    {
      title: 'card-1',
      text: 'lorem wdeafrgteh gefwedqwf grewfeasx tgrfd t rd esws  grwa fwed g3fs wq tr hytgf fed gf htgrfd gf grf'
    },
    {
      title: 'card-2',
      text: 'lorem wdeafrgteh gefwedqwf grewfeasx tgrfd t rd esws  grwa fwed g3fs wq tr hytgf fed gf htgrfd gf grf'
    },
    {
      title: 'card-3',
      text: 'lorem wdeafrgteh gefwedqwf grewfeasx tgrfd t rd esws  grwa fwed g3fs wq tr hytgf fed gf htgrfd gf grf'
    },
    {
      title: 'card-4',
      text: 'lorem wdeafrgteh gefwedqwf grewfeasx tgrfd t rd esws  grwa fwed g3fs wq tr hytgf fed gf htgrfd gf grf'
    },
    {
      title: 'card-5',
      text: 'lorem wdeafrgteh gefwedqwf grewfeasx tgrfd t rd esws  grwa fwed g3fs wq tr hytgf fed gf htgrfd gf grf'
    },
    {
      title: 'card-6',
      text: 'lorem wdeafrgteh gefwedqwf grewfeasx tgrfd t rd esws  grwa fwed g3fs wq tr hytgf fed gf htgrfd gf grf'
    },
  ]);

  return (
    <div>
      <section>
        <div className="container">
          <h1>Responsive Card</h1>
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <button className="btn">explore More</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
