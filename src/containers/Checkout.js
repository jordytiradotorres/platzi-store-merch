import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import '../styles/components/Checkout.css';

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de Pedidos:</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
          <button type="button">
            <FaTrashAlt />
          </button>
        </div>
      </div>

      <div className="Checkout-sidebar">
        <h3>Precio total: $10</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar Pedido</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;