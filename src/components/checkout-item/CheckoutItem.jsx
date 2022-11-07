import { useContext } from 'react';

import './checkout-item.scss';
import { CartContext } from '../../contexts/CartContext';

const CheckoutItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  // Helper function definitions
  const clearCartItemHandler = () => clearItemFromCart(cartItem);
  const removeCartItemHandler = () => removeItemFromCart(cartItem);
  const addItemToCartHandler = () => addItemToCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>

      <span className='quantity'>
        <div className='arrow' onClick={removeCartItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </span>

      <span className='price'>{price}</span>
      <div className='remove-button' onClick={clearCartItemHandler}>
        x
      </div>
    </div>
  );
};

export default CheckoutItem;
