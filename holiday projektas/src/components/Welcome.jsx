
import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.scss';

const Welcome = () => {
  return (
    <div className="welcome">
      <h1 className="welcome__title">Welcome</h1>
      <p className="welcome__text">Login or Register</p>
      <div className="welcome__buttons">
        <Link to="/login" className="welcome__buttons__btn">Login</Link>
        <Link to="/register" className="welcome__buttons__btn">Register</Link>
      </div>
    </div>
  );
};

export default Welcome;
