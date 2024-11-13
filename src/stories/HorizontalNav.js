import React from 'react';
import PropTypes from 'prop-types';
import './HorizontalNav.css'; // Import the CSS file for styling

const HorizontalNav = ({ links }) => {
  return (
    <nav className="horizontal-nav">
      <ul className="horizontal-nav-list">
        {links.map((link, index) => (
          <li key={index} className="horizontal-nav-item">
            <a href={link.href} className="horizontal-nav-link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

HorizontalNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HorizontalNav;
