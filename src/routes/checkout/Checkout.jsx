import React, { useContext } from 'react';

import {
  CheckoutPageContainer,
  CheckoutPageHeader,
  CheckoutPageBlock,
} from './checkout.styles.jsx';
import { CartContext } from '../../contexts/CartContext';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <CheckoutPageContainer>
      <CheckoutPageHeader>
        <CheckoutPageBlock>
          <span>Product</span>
        </CheckoutPageBlock>

        <CheckoutPageBlock>
          <span>Description</span>
        </CheckoutPageBlock>

        <CheckoutPageBlock>
          <span>Quantity</span>
        </CheckoutPageBlock>

        <CheckoutPageBlock>
          <span>Price</span>
        </CheckoutPageBlock>

        <CheckoutPageBlock>
          <span>Remove</span>
        </CheckoutPageBlock>
      </CheckoutPageHeader>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className='checkout-total'>Total: UGX {cartTotal}</span>
    </CheckoutPageContainer>
  );
};

export default Checkout;
