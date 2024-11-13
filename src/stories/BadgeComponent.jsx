
import React from 'react';
import { Badge, Space } from 'antd';
import './BadgeComponent.css';


const BadgeComponent = ({ status, text }) => {
    const badgeClass = `custom-badge custom-badge-${status}`;

    return (
        <Space>
            <Badge
                status={status}
                text={<span className={badgeClass}>{text}</span>}
            />
        </Space>

    );
};

export default BadgeComponent;

