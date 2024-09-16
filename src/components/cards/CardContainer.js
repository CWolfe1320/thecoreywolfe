import React from 'react';
import Card from './Card';
import './CardContainer.css';
import personalBlogImage from '../../assets/images/Personal Blog Card.png';
import projectImage from '../../assets/images/Projects Card.png';
import inspirationImage from '../../assets/images/Inspiration Card.png';

const cards = [
  { image: personalBlogImage, title: 'Personal Blog' },
  { image: projectImage, title: 'Projects' },
  { image: inspirationImage, title: 'Inspiration' }
];

const CardContainer = () => {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} />
      ))}
    </div>
  );
};

export default CardContainer;
