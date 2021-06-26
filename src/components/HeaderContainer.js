import React from "react";
import "../styles/HeaderContainer.css";


const HeaderContainer = () => {
  return (
    <div className="HeaderContainer">
    <div class="header__section-left">
    <div class="top-navigation">
    <a className="site-identity" target="_self" href="https://github.com/arunahuja94/requestman"><img className="site-logo" src="https://raw.githubusercontent.com/arunahuja94/requestman/master/postman.png" /><div class="top-navigation-text">Requestman</div></a>
    </div></div>
    </div>
  );
}
 
export default HeaderContainer;
