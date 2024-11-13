// Card.js
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, image, content, actions }) => (
  <div className="card">
    {image && <img src={image} alt="Card" className="card-image" />}
    <div className="card-body">
      {title && <h3 className="card-title">{title}</h3>}
      {content && <p className="card-content">{content}</p>}
    </div>
    {actions && <div className="card-actions">{actions}</div>}
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
  actions: PropTypes.node,
};

export default Card;
