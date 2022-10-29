import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { ReactComponent as TMA } from '../../assets/crown.svg';
import './navigation.styles.scss';

import { UserContext } from '../../contexts/UserContext';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropDown from '../../components/cart-drop-down/CartDropDown';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <TMA className='logo' />
        </Link>

        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGNIN
            </Link>
          )}
          <CartIcon />
        </div>
        <CartDropDown />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
