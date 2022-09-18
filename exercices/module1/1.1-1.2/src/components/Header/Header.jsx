import React from 'react';
import logo from 'components/Header/VINCI.png';

const Header = (props) => {
    return <>
      <img src={logo} alt="Logo"/>
      <h1>{props.course}</h1>

    </>
  }

export default Header;