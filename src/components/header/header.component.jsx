import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = (props) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="image" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOPS
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);
export default Header;
