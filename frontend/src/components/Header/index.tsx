import React from 'react';
import logo from '../../logo.svg';
import './header.css';
const Header = () => {
  return (
    <header>
      <img src={logo} className="header-logo" alt="Quiz app logo" />
    </header>
  );
};

export default Header;
