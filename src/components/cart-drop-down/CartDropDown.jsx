import './cart-drop-down.scss';
import React from 'react';

import Button from '../button/Button';

const CartDropDown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button> Go To Checkout</Button>
    </div>
  );
};

export default CartDropDown;
