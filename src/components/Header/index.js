import React from 'react';
// import logo from '../../assets/img/logo.png'

function Header(props) {
  return (
    <header>
      {props.children}
    </header>
  );
}

export default Header;