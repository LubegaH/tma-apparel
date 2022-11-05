import { useContext } from 'react';

import './cart-icon.scss';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/CartContext';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className='shopping-bag-container' onClick={toggleOpen}>
      <ShoppingBag className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;