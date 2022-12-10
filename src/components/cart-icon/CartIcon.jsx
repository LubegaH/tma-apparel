import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';

import {
  ShoppingBagContainer,
  ItemCount,
  ShoppingIcon,
} from './CartIcon.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <ShoppingBagContainer onClick={toggleOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </ShoppingBagContainer>
  );
};

export default CartIcon;
