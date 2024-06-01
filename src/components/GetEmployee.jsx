import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './GetEmployee.css';

const GetEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch employee data from the backend
    axios.get('http://localhost:3000/api/getemployees')
      .then(response => {
        setEmployees(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching employee data: ' + error.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backend-mysql-hkfrutwyi-shybash-shaiks-projects.vercel.app/api/employees/${id}`);
      // Remove the deleted employee from the local state
      setEmployees(employees.filter(employee => employee.id !== id));
    } catch (error) {
      setError('Error deleting employee: ' + error.response.data.error);
    }
  };

  return (
    <div className="employee-container">
      <div className="header">
        <h2>Employee List</h2>
        <Link to="/employee">
          <button className="add-employee-button">Add Employee</button>
        </Link>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.salary}</td>
              <td>{employee.category}</td>
              <td>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
                <Link to={`/edit/${employee.id}`}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetEmployee;
