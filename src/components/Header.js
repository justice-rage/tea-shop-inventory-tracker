import React from "react";
import teaShopLogo from "./../img/teaShopLogo.png";


function Header(){
  return (
    <React.Fragment>
    <img src={teaShopLogo} alt="An image of the logo" />
    </React.Fragment>
  );
}

export default Header;