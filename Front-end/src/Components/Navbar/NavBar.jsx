import React from "react";
import { FaShoppingBasket, FaUser } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Style.css";
function NavBar() {
  const shoppingBasket = useSelector((store) => store.shoppingBasket);
  return (
    <nav className="nav-container">
      <ul className="nav">
        <Link to="/electricscooters">
          <li>Electric Scooters</li>
        </Link>
        <Link to="/accessories">
          {" "}
          <li>Accessories</li>
        </Link>
        <Link to="/about">
          {" "}
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>

      <Link to="/">
        <img
          className="logo"
          style={{ width: "128px", height: "38px" }}
          src="https://websitedemos.net/electric-scooter-04/wp-content/uploads/sites/1113/2022/07/logo-regular.png"
          alt="Logo"
        />
      </Link>

      <div className="icons">
        <form className="search-form">
          <input type="search" placeholder="Search products..." />
          <button className="search-button" type="submit">
            <BsChevronRight />
          </button>
        </form>
        <span className="shopping-basket-icon">
          <FaShoppingBasket />
          <span className="shoppingBasket">{shoppingBasket.length}</span>
        </span>
        <span className="user-icon">
          <Link to="/login ">
            <FaUser />
          </Link>
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
