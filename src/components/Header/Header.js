import React from "react"
import logo from "../../images/logo.png"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/Inventory">Inventory</Link>
        <Link to="/orderReview">Order Review</Link>
      </nav>
    </div>
  )
}

export default Header
