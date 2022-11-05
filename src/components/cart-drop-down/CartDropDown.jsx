import './cart-drop-down.scss';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { CartContext } from '../../contexts/CartContext';

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const checkoutButtonHandler = () => {
    navigate('/checkout');
  };
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={checkoutButtonHandler}> Go To Checkout</Button>
    </div>
  );
};

export default CartDropDown;
