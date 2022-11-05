import React, { useContext } from 'react';

import './checkout.scss';
import { CartContext } from '../../contexts/CartContext';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='checkoutpage-container'>
      <div className='checkoutpage-header'>
        <div className='checkoutpage-block'>
          <span>Product</span>
        </div>
        <div className='checkoutpage-block'>
          <span>Description</span>
        </div>
        <div className='checkoutpage-block'>
          <span>Quantity</span>
        </div>
        <div className='checkoutpage-block'>
          <span>Price</span>
        </div>
        <div className='checkoutpage-block'>
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className='checkout-total'>Total: 0</span>
    </div>
  );
};

export default Checkout;
