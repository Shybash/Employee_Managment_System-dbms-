import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://backend-mysql-hkfrutwyi-shybash-shaiks-projects.vercel.app/api/countEmp')
      .then(response => {
        setTotalEmployees(response.data.count);
      })
      .catch(error => {
        setError('Error fetching employees count: ' + error.message);
      });

      axios.get('https://backend-mysql-hkfrutwyi-shybash-shaiks-projects.vercel.app/api/countTrans')
      .then(response => {
        setTotalTransactions(response.data.total_amount);
      })
      .catch(error => {
        setError('Error fetching total amount of transactions: ' + error.message);
      });
    

    axios.get('https://backend-mysql-hkfrutwyi-shybash-shaiks-projects.vercel.app/api/countCat')
      .then(response => {
        setTotalCategories(response.data.count);
      })
      .catch(error => {
        setError('Error fetching categories count: ' + error.message);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      {error && <p className="error">{error}</p>}
      <div className="dashboard-stats">
        <div className="stat-item">
          <h3>Total Employees</h3>
          <p>{totalEmployees}</p>
        </div>
        <div className="stat-item">
          <h3>Total Salary</h3>
          <p>₹{totalTransactions}</p>
        </div>
        <div className="stat-item">
          <h3>Total Categories</h3>
          <p>{totalCategories}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
