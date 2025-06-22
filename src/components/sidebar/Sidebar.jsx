import React from 'react';
import './Sidebar.css';
import { MdNotifications } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>StreamNotify</h2>
      <ul>
        <li className="active">
          <span style={{ marginRight: '10px', verticalAlign: 'middle' }}>
            <MdNotifications />
          </span>
          Notifications
        </li>
      </ul>
    </div>
  );
};

export default Sidebar; 