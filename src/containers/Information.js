import React, { useContext, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import '../styles/components/Information.css';
import AppContext from '../context/AppContext';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;
  const history = useHistory();

  const handleSubmit = () => {
    const formData = new FormData(form.current);

    /* con (// prettier-ignore)
  ignoramos al prettier para que haga su trabajo si no como nosotros queremos
    */
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };

    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    let sum = cart.reduce(reducer, 0);

    return sum;
  };

  return (
    <>
      <Helmet>
        <title>Información - Platzi Conf Merch</title>
      </Helmet>
      <div className="Information">
        <div className="Information-content">
          <div className="Information-head">
            <h2>Informacion de contacto: </h2>
          </div>

          <div className="Information-form">
            <form ref={form} onSubmit={handleSubmit}>
              <input type="text" placeholder="Nombre completo" name="name" />
              <input
                type="email"
                placeholder="Correo electronico"
                name="email"
              />
              <input type="text" placeholder="Dirección" name="address" />
              <input type="text" placeholder="apto" name="apto" />
              <input type="text" placeholder="Ciudad" name="city" />
              <input type="text" placeholder="País" name="country" />
              <input type="text" placeholder="Estado" name="state" />
              <input type="text" placeholder="Codigo postal" name="cp" />
              <input type="text" placeholder="Teléfono" name="phone" />
            </form>
          </div>

          <div className="Information-buttons">
            <div className="Information-back">
              <Link to="/checkout">Regresar</Link>
            </div>
            <div className="Information-next">
              <button type="button" onClick={handleSubmit}>
                Pagar
              </button>
            </div>
          </div>
        </div>

        <div className="Information-sidebar">
          <h3>Pedido: </h3>

          {cart.map((item, index) => (
            <div className="Information-item" key={index}>
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ margin: '10px 0 0 0' }}>
          <h3>Total: $ {handleSumTotal()}</h3>
        </div>
      </div>
    </>
  );
};

export default Information;
