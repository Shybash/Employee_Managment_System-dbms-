import React from 'react';
import './Sidebar.css'; // Assume you have the CSS styles in this file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <a href="/dashboard" className="sidebar-link">
            <i className="icon-dashboard"></i>
            <span>📊 Dashboard</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="getemployee" className="sidebar-link">
            <i className="icon-user"></i>
            <span>👥 Manage Employee</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="category" className="sidebar-link">
            <i className="icon-category"></i>
            <span>📂 Category</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/employee" className="sidebar-link">
            <i className="icon-profile"></i>
            <span>➕ Add Employee</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/transaction" className="sidebar-link">
            <i className="icon-settings"></i>
            <span>💼 Transaction</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
