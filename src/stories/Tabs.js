import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tabs.css'; 

const Tab = ({ children, isActive, onClick, icon }) => {
  return (
    <button
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {icon && <span className="tab__icon">{icon}</span>}
      {children}
    </button>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
};

const Tabs = ({ variant, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={`tabs ${variant}`}>
      <div className={`tabs__nav ${variant}`}>
        {React.Children.map(children, (child, index) => {
          if (child.type === Tab) {
            return React.cloneElement(child, {
              isActive: activeTab === index,
              onClick: () => handleTabClick(index),
            });
          }
          return null;
        })}
      </div>

      <div className="tabs__content">
        {React.Children.toArray(children)[activeTab].props.children}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  variant: PropTypes.oneOf(['horizontal', 'vertical', 'icon-text']),
  children: PropTypes.node.isRequired,
};

Tabs.defaultProps = {
  variant: 'horizontal',
};

export { Tabs, Tab };
