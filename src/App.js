import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import Sidebar from './components/Sidebar';
import GetEmployee from './components/GetEmployee';
import Category from './components/Category';
import Transaction from './components/Transaction';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/employee" element={<><Sidebar /><AddEmployee /></>} />
        <Route path="/getemployee" element={<><Sidebar /> <GetEmployee /></>} />
        <Route path="/category" element={<><Sidebar /> <Category /></>} />
        <Route path="/transaction" element={<><Sidebar/> <Transaction /></>} />
        <Route path="/dashboard" element={<><Sidebar /> <Dashboard /></>} />
      </Routes>
    </Router>
  );
}

export default App;
