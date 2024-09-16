import React from 'react';
import './Card.css'; // CSS module for styling

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `url("${image}")` }}>
        <div className="card-title-container">
            <div className="card-title-text">
                {title}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
