import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '32px' }}>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
