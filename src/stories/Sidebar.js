import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

// Menu Item Component
const MenuItem = ({ icon, title, isCollapsed }) => {
  return (
    <div className="menu-item">
      <span className="menu-item__icon">{icon}</span>
      <span className="menu-item__title">{title}</span>
    </div>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.node.isRequired, 
  title: PropTypes.string.isRequired, 
};

// Main Sidebar Component
const Sidebar = () => {
  return (
    <div className="email-sidebar">
      <div className="profile">
        <span className="profile-icon">👤</span> 
        <span className="profile-name">Rishika Pande</span>
      </div>

      <div className="menu">
        <MenuItem title="Inbox" icon="📥" />
        <MenuItem title="Sent Mail" icon="✉️" />
        <MenuItem title="Drafts" icon="📝" />
        <MenuItem title="Trash" icon="🗑️" />
      </div>
    </div>
  );
};

export default Sidebar;
