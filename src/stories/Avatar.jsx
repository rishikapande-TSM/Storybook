import React from 'react';
import './Avatar.css'; // Ensure you import the CSS file

const Avatar = ({ initials, image, status }) => {
    return (
        <div className="avatar-container">
            {image ? (
                <img src={image} alt="Avatar" className="avatar-image" />
            ) : (
                <div className="avatar-initials">{initials}</div>
            )}
            {status && (
                <div
                    className={`status-indicator ${
                        status === 'online' ? 'status-online' : 'status-offline'
                    }`}
                />
            )}
        </div>
    );
};

export default Avatar;
