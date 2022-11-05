import React, { useContext } from 'react';

import './checkout.scss';
import { CartContext } from '../../contexts/CartContext';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div>
      <h1>Checkout Page</h1>

      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span onClick={() => removeItemFromCart(cartItem)}>Decrease</span>
              <span>{quantity}</span>
              <span onClick={() => addItemToCart(cartItem)}>Increase</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
