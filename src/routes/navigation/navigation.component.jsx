import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { ReactComponent as TMA } from '../../assets/crown.svg';
import {
  NavigationContainer,
  Logo,
  NavLinks,
  NavLink,
} from './navigation.styles';

import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropDown from '../../components/cart-drop-down/CartDropDown';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <Logo to='/'>
          <TMA className='logo' />
        </Logo>

        <NavLinks>
          <NavLink to='/categories'>CATEGORIES</NavLink>
          <NavLink to='/'>KIDS</NavLink>
          <NavLink to='/'>MEN</NavLink>
          <NavLink to='/'>WOMEN</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGNIN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
