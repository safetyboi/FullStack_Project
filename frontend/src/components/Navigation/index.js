import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {ProfileButton} from './ProfileButton';
import './Navigation.css';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import logo from './foobar_donuts.jpg';
import login from './login.png';
import cart from './cart.png';
import cart_hover from './cart-hover.png';
import { Footer } from '../Footer/Footer';


export const Navigation = ({toggle}) => {

  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <ProfileButton user={sessionUser} />
      <button onClick={()=> dispatch(sessionActions.logoutUser(sessionUser.id))}>Log Out</button> 
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">
        <img src={login} className="login-icon"></img>
        </NavLink>
      </>
    );
  }


  return (
    <>
    <div className="wrapping-top-bar">
      {/* <div></div> */}
      <Footer />
      <div className="center-home-button">
        <NavLink exact to="/">
        <img src={logo} className="logo"></img>
        </NavLink>
      </div>
      <div className="right-side-buttons">
      <ul className="nav-list">
        <li>
          {sessionLinks}
        </li>
        <li>
        <img src={cart} className="cart-icon" onMouseOver={e => e.currentTarget.src = cart_hover} onMouseOut={e => e.currentTarget.src = cart} onClick={toggle}></img>
        </li>
      </ul>
      </div>
    </div>
    </>
  );
}
