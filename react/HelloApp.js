import React from 'react';
import { useProduct, useProductDispatch } from 'vtex.product-context';

const HelloApp = () => {
  const { product } = useProduct();
  const dispatch = useProductDispatch();

  const handleClick = () => {
    dispatch({
      type: 'SET_QUANTITY',
      args: {
        quantity: 3,
      },
    });
  };

  return (
    <div>
      <h1> Nombre: {product.productName} </h1>
      <p> Marca: {product.brand} </p>
      <p> Descripción: {product.description} </p>

      <button onClick={handleClick}>
        GO!
      </button>
    </div>
  )
};

export default HelloApp;
