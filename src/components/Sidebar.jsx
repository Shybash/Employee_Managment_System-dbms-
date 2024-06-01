import React, { useState } from 'react';
import './Sidebar.css'; // Assume you have the CSS styles in this file

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isOpen ? 'show' : ''
          } sidebar`}
        >
          <div className="sidebar-header bg-dark text-light">
            <h2 className="text-center">Admin Panel</h2>
          </div>
          <ul className="list-group sidebar-menu">
            <li className="list-group-item sidebar-item">
              <a href="/dashboard" className="sidebar-link text-dark">
                <i className="icon-dashboard"></i>
                <span>📊 Dashboard</span>
              </a>
            </li>
            <li className="list-group-item sidebar-item">
              <a href="getemployee" className="sidebar-link text-dark">
                <i className="icon-user"></i>
                <span>👥 Manage Employee</span>
              </a>
            </li>
            <li className="list-group-item sidebar-item">
              <a href="category" className="sidebar-link text-dark">
                <i className="icon-category"></i>
                <span>📂 Category</span>
              </a>
            </li>
            <li className="list-group-item sidebar-item">
              <a href="/employee" className="sidebar-link text-dark">
                <i className="icon-profile"></i>
                <span>➕ Add Employee</span>
              </a>
            </li>
            <li className="list-group-item sidebar-item">
              <a href="/transaction" className="sidebar-link text-dark">
                <i className="icon-settings"></i>
                <span>💼 Transaction</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
