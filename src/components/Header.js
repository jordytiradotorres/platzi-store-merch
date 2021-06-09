import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>

      <div className="Header-checkout">
        <Link to="/checkout">
          <FaShoppingBasket />
        </Link>
      </div>
    </header>
  );
};

export default Header;
