import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import '../styles/components/Checkout.css';
import AppContext from './../context/AppContext';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemoveFromCart = (product, index) => {
    removeFromCart(product, index);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    let sum = cart.reduce(reducer, 0);

    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin Pedidos</h3>}

        {cart.map((item, index) => (
          <div key={index} className="Checkout-item">
            <div className="Checkout-itement">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button
              type="button"
              onClick={() => handleRemoveFromCart(item, index)}
            >
              <FaTrashAlt />
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio total: $ {handleSumTotal()}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar Pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
