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

let setState = null;

const CardContainer = ({stateChange}) => {
  setState = stateChange;
  return (
    <div className="card-container" onClick={handleClick}>
      {cards.map((card, index) => (
        <Card key={index} image={card.image} title={card.title}/>
      ))}
    </div>
  );
};

const handleClick = (e) => {
  const card = e.target.closest('.card');
  if (card) {
    const titleElement = card.querySelector('.card-title-text');
    if (titleElement) {
      const cardTitle = titleElement.textContent;
      setState(cardTitle);
    }
  }
};

export default CardContainer;
