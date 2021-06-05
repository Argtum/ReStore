import React from "react";
import "./shop-header.css";
import {Link} from "react-router-dom";

const ShopHeader = ({numItems, total}) => {
    return (
      <header className="shop-header">
          <Link className="logo text-dark" to="/">
            <div>ReStore</div>
          </Link>
          <Link className="shopping-cart text-dark" to="/cart">
              <div>
                  <i className="cart-icon fa fa-shopping-cart" />
                  {numItems} items (${total})
              </div>
          </Link>
      </header>
    );
};

export default ShopHeader;
