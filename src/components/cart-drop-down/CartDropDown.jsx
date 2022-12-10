import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
} from './cart-drop-down.styles.jsx';
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
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={checkoutButtonHandler}> Go To Checkout</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
