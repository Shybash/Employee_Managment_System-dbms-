import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddEmployee.css';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch categories from the backend
    axios.get('http://localhost:3000/api/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        setMessage('Error fetching categories: ' + error.message);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new employee object
    const newEmployee = {
      name,
      email,
      salary,
      category
    };

    // Make a POST request to the backend to add the employee
    axios.post('https://backend-mysql-hkfrutwyi-shybash-shaiks-projects.vercel.app/api/employees', newEmployee)
      .then(response => {
        setMessage('Employee added successfully');
        // Reset the form after successful addition
        setName('');
        setEmail('');
        setSalary('');
        setCategory('');
        // Clear the success message after 3 seconds
        setTimeout(() => setMessage(''), 3000);
      })
      .catch(error => {
        setMessage('Error adding employee: ' + error.message);
      });
  };

  return (
    <div className="add-employee-container">
      <h2>Add Employee</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
