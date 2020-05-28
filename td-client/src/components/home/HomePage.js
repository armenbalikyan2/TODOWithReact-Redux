import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';

const HomePage = () => (
  <div className="homePage">
    <h1>Todo App </h1>
    <Link to="/about"> Learn more </Link>
  </div>
);

export default HomePage;
