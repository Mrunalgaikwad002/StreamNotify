import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotificationCard from '../components/NotificationCard/NotificationCard';
import CustomDropdown from '../components/CustomDropdown/CustomDropdown';

import './Dashboard.css';
import initialNotifications from '../data/notifications.json';

const notificationTemplates = [
    { type: 'mention', message: 'You were mentioned in a new comment.' },
    { type: 'task', message: 'A new task "Review Pull Request" was assigned to you.' },
    { type: 'invite', message: 'You have a new invitation to join the "Marketing" team.' },
];

const ToastMessage = ({ type, message }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span className={`badge badge-${type}`} style={{ marginRight: '10px' }}>{type}</span>
      {message}
    </div>
);

const typeOptions = [
  { value: 'all', label: 'All Types' },
  { value: 'task', label: 'Task' },
  { value: 'mention', label: 'Mention' },
  { value: 'invite', label: 'Team Invite' },
];

const Dashboard = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [readFilter, setReadFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  useEffect(() => {
    const interval = setInterval(() => {
      const template = notificationTemplates[Math.floor(Math.random() * notificationTemplates.length)];
      const newNotification = {
        id: Date.now(),
        ...template,
        timestamp: new Date().toISOString(),
        read: false,
      };
      setNotifications(prev => [newNotification, ...prev]);
      toast(<ToastMessage type={newNotification.type} message={newNotification.message} />);
    }, 10000); // Adds a new notification every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleMarkAsRead = (id) => {
    setNotifications(
      notifications.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const filtered = notifications.filter(n => {
    const typeMatch = typeFilter === 'all' || n.type === typeFilter;
    const readMatch =
      readFilter === 'all' ? true : readFilter === 'read' ? n.read : !n.read;
    return typeMatch && readMatch;
  });

  return (
    <div className="dashboard-container">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="filter-controls">
        <div className="read-filter-bar">
          <button
            className={readFilter === 'all' ? 'active' : ''}
            onClick={() => setReadFilter('all')}
          >
            All
          </button>
          <button
            className={readFilter === 'unread' ? 'active' : ''}
            onClick={() => setReadFilter('unread')}
          >
            Unread
          </button>
          <button
            className={readFilter === 'read' ? 'active' : ''}
            onClick={() => setReadFilter('read')}
          >
            Read
          </button>
        </div>
        
        <CustomDropdown
          options={typeOptions}
          selected={typeFilter}
          onSelect={setTypeFilter}
        />
      </div>
      <div className="notification-list">
        {filtered.map(n => (
          <NotificationCard key={n.id} notification={n} onMarkAsRead={handleMarkAsRead} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard; 