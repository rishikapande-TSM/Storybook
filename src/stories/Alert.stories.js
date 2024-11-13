// Alert.stories.js

import React, { useState } from 'react';
import Alert from './Alert';

export default {
  title: 'Example/Alert',
  component: Alert,
};

export const SuccessAlert = () => {
  const [isOpen, setIsOpen] = useState(true);
  const closeAlert = () => setIsOpen(false);

  return (
    isOpen && (
      <Alert 
        message="This is a success Alert."
        variant="success"
        onClose={closeAlert}
      />
    )
  );
};

export const ErrorAlert = () => {
  const [isOpen, setIsOpen] = useState(true);
  const closeAlert = () => setIsOpen(false);

  return (
    isOpen && (
      <Alert 
        message="This is an error Alert."
        variant="error"
        onClose={closeAlert}
      />
    )
  );
};

export const WarningAlert = () => {
  const [isOpen, setIsOpen] = useState(true);
  const closeAlert = () => setIsOpen(false);

  return (
    isOpen && (
      <Alert 
        message="This is a warning Alert."
        variant="warning"
        onClose={closeAlert}
      />
    )
  );
};

export const InfoAlert = () => {
  const [isOpen, setIsOpen] = useState(true);
  const closeAlert = () => setIsOpen(false);

  return (
    isOpen && (
      <Alert 
        message="This is an info Alert."
        variant="info"
        onClose={closeAlert}
      />
    )
  );
};
