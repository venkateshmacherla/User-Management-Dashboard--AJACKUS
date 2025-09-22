import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDirectoryPage from './pages/UserDirectoryPage';
import UserFormPage from './pages/UserFormPage';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserDirectoryPage />} />
        <Route path="/user-form" element={<UserFormPage />} />
      </Routes>
    </Router>
  );
}
