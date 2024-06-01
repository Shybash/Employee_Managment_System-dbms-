// Category.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Category.css';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        setError('Error fetching categories: ' + error.message);
      });
  }, []);

  const handleAddCategory = (e) => {
    e.preventDefault();

    axios.post('https://backend-mysql-hkfrutwyi-shybash-shaiks-projects.vercel.app/api/categories', { name: categoryName })
      .then(response => {
        setCategories([...categories, response.data]);
        setCategoryName('');
        setMessage('Category added successfully');
        setTimeout(() => setMessage(''), 3000);
      })
      .catch(error => {
        setError('Error adding category: ' + error.message);
      });
  };

  return (
    <div className="category-container">
      <h2>Manage Categories</h2>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleAddCategory}>
        <div>
          <label>Category Name:</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Category</button>
      </form>
      <div className="category-list">
        <h3>Existing Categories</h3>
        <ul>
          {categories.map(category => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
