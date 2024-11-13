import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faTrashAlt, faExclamationCircle, faArchive } from '@fortawesome/free-solid-svg-icons';
import './List.css'; // CSS for styling

// Basic List 
export const BasicList = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (item) => {
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.includes(item)
        ? prevCheckedItems.filter((checkedItem) => checkedItem !== item)
        : [...prevCheckedItems, item]
    );
  };

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <div>
      <h2>Basic List</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <label>
              <input
                type="checkbox"
                checked={checkedItems.includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};


// List with Icon 
export const ListWithIcon = () => {
    const items = [
      { name: 'Inbox', icon: faInbox },
      { name: 'Spam', icon: faExclamationCircle },
      { name: 'Trash', icon: faTrashAlt },
      { name: 'Archived', icon: faArchive }, 
    ];
  
    return (
      <div>
        <h2>List with Icons</h2>
        <ul className="list-with-icon">
          {items.map((item) => (
            <li key={item.name} className="list-item">
              <FontAwesomeIcon icon={item.icon} className="icon" />
              <span className="item-name">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };



BasicList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ListWithIcon.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.object,
  })).isRequired,
};

export default { BasicList, ListWithIcon };
