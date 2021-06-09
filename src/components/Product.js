import React from 'react';

const Product = ({ product }) => {
  const { image, title, description, price } = product;

  return (
    <div className="Products-item">
      <img src={image} alt={title} />
      <div className="Product-item-info">
        <h2>
          {title} <span>$ {price}</span>
        </h2>
        <p>{description}</p>
      </div>
      <button type="button">Comprar</button>
    </div>
  );
};

export default Product;
