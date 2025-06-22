import React from 'react';
import './NotificationCard.css';
import { formatDate } from '../../utils/formatDate';

const NotificationCard = ({ notification, onMarkAsRead }) => {
  const { id, type, message, timestamp, read } = notification;

  return (
    <div className={`notification-card ${type} ${read ? 'read' : 'unread'}`}>
      <div className="notification-content">
        <div className="notification-header">
          <div className="notification-title-group">
            {!read && <div className="unread-dot"></div>}
            <span className={`badge badge-${type}`}>{type}</span>
          </div>
          <span className="notification-timestamp">{formatDate(timestamp)}</span>
        </div>
        <p className="notification-message">{message}</p>
        {!read && (
          <button onClick={() => onMarkAsRead(id)} className="mark-as-read">
            Mark as read
          </button>
        )}
      </div>
    </div>
  );
};

export default NotificationCard; 