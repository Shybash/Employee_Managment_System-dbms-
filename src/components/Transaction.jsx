import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Transaction.css';

const Transaction = () => {
  const [employees, setEmployees] = useState([]);
  const [employeeId, setEmployeeId] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/getemployees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        setMessage('Error fetching employees: ' + error.message);
      });
  }, []);

  const handleTransaction = (e) => {
    e.preventDefault();

    const newTransaction = {
      employeeId,
      amount,
      type: transactionType
    };

    axios.post('http://localhost:3000/api/transactions', newTransaction)
      .then(response => {
        setMessage('Transaction successful');
        setEmployeeId('');
        setAmount('');
        setTransactionType('');
        setTimeout(() => setMessage(''), 3000);
      })
      .catch(error => {
        setMessage('Error processing transaction: ' + error.message);
      });
  };

  return (
    <div className="transaction-container">
      <h2>Employee Transactions</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleTransaction}>
        <div>
          <label>Employee:</label>
          <select
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          >
            <option value="">Select an employee</option>
            {employees.map(employee => (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Transaction Type:</label>
          <select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
            required
          >
            <option value="">Select a type</option>
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>
        <button type="submit">Submit Transaction</button>
      </form>
    </div>
  );
};

export default Transaction;
