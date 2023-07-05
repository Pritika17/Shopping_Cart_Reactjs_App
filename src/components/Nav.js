import React, { useState } from "react"
import "../styles/nav.css"
import { BiMenu } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const Nav = ({ size, setShow }) => {
  const [showMediaIcons, setShowMediaIcons] = useState(false)
  return (
    <nav className="main-nav">
      <div className="logo">
        <img onClick={() => { setShow(true) }} src={require("../assets/logo.png")} alt="" />
      </div>
      <div className={
        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
      }>
        <ul>
          <li>
            <Link to="/" className="link">
              <p onClick={() => { setShow(true) }}>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="cart">
        <ul>
          <li>
            <BiCart size={34} onClick={() => setShow(false)} />
            <span>{size}</span>
          </li>
        </ul>
        <div className="hamburger-menu">
          <p onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <BiMenu size={34} />
          </p>
        </div>
      </div>
    </nav>
  )
}

export default Nav