import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component

export default {
  title: 'Example/Modal', 
  component: Modal,
};


export const Modals = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const openModal = () => setIsOpen(true); 
  const closeModal = () => setIsOpen(false); 

  return (
    <div>
      <button className="open-modal-btn" onClick={openModal}>Open Modal</button>
      <Modal 
        isOpen={isOpen}
        title=" Modal Title"
        description="Wohoo! You are reading this text in a modal."
        onClose={closeModal}
      />
    </div>
  );
};

