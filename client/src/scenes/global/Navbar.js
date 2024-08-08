import { useDispatch, useSelector } from "react-redux";
import { Badge, IconButton } from "@mui/material";
import { setIsCartOpen } from "../../state";
import { setIsAuthOpen } from "../../state";
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import '../../styles/Navbar.css'
import '../../styles/global.css'

import logo from '../../components/img/main-logo-2.png';
import login from '../../components/img/login.png';
import cartIcon from '../../components/img/cart.png';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIconAnimation, setMenuIconAnimation] = useState("");
  
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    setMenuIconAnimation(menuOpen ? "" : "animate");
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setMenuIconAnimation(false);
  }

  const location = useLocation(); 
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
        <nav>
          <div className="web-max navbar nav-bg">
            <h1>
            <span className="none">Welcome to 9on9 Website</span>
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </h1>
            <button className={`hamburger ${menuIconAnimation}`} onClick={handleMenuClick}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
              <li><Link to="/about" className={"underline" + (url === "/about" ?" active" : "")} onClick={handleLinkClick}>About</Link></li>
              <li><Link to="/contact" className={"underline" + (url === "/contact" ?" active" : "")} onClick={handleLinkClick}>Contact</Link></li>
              <li><Link to="/events" className={"underline" + (url === "/events" ?" active" : "")} onClick={handleLinkClick}>Events</Link></li>
              <li><Link to="/gallery" className={"underline" + (url === "/gallery" ?" active" : "")} onClick={handleLinkClick}>Gallery</Link></li>
              <li><Link to="/shop" className={"underline" + (url === "/shop" ?" active" : "")} onClick={handleLinkClick}>Shop</Link></li>
              <li>
                <Badge
                  sx={{
                    "& .MuiBadge-badge": {
                      right: 5,
                      top: 5,
                      padding: "0 4px",
                      height: "14px",
                      minWidth: "13px",
                    },
                  }}
                >
                  <IconButton
                    onClick={() => dispatch(setIsAuthOpen({}))}
                    sx={{ color: "black" }}
                  >
                    <img src={login} alt="Login-icon" onClick={handleLinkClick}/>
                  </IconButton>
                </Badge>
              </li>
              <li>
                <Badge
                  badgeContent={cart.length}
                  color="secondary"
                  invisible={cart.length === 0}
                  sx={{
                    "& .MuiBadge-badge": {
                      right: 5,
                      top: 5,
                      padding: "0 4px",
                      height: "14px",
                      minWidth: "13px",
                    },
                  }}
                >
                  <IconButton
                    onClick={() => dispatch(setIsCartOpen({}))}
                    sx={{ color: "black" }}
                  >
                    <img src={cartIcon} alt="Cart-icon" onClick={handleLinkClick}/>
                  </IconButton>
                </Badge>
              </li>
            </ul>
          </div>


        </nav>
        
  );
}

export default Navbar;