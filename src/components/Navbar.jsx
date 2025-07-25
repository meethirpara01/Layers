import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import shoppingIcon from '../assets/online-shopping.png';


const Navbar = () => {

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handelLayers = () =>
  {
    navigate("/");
  }

  const handleMenuClick = () => 
  {
    setMenuOpen(prev => !prev);
  };

  const handelcartIcon = () =>
  {
    navigate("/cart");
  }

  return (
    <div className='navbar'>
      <div className='menu'>
        <NavLink to={!menuOpen? "/navsection" : -1} onClick={handleMenuClick} className='MenuText'>{menuOpen&&"/navsection" ? "Close" : "Menu"}</NavLink>
      </div>
      <div className='logo' onClick={handelLayers}>Layers</div>
      <div className='login'>
        <img onClick={handelcartIcon} src={shoppingIcon} alt="" srcset="" />
        <NavLink to={"/login"} className='loginText'>Log In</NavLink>
      </div>
    </div>
  )
}

export default Navbar