import React from 'react';
import { useProduct, useProductDispatch } from 'vtex.product-context';
import styles from './styles.css';

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

      <h1 className={styles.productName}>
        Nombre: {product.productName}
      </h1>

      <p> Marca: {product.brand} </p>
      <p> Descripción: {product.description} </p>

      <button
        onClick={handleClick}
        className="white br3 bn w5 pv4 ph3 bg-action-primary"
      >
        GO!
      </button>
    </div>
  )
};

export default HelloApp;
