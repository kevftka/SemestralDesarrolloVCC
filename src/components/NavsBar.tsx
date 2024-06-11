import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/cclogo.png"
import "./NavsBar.sass"


const Navsbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" >
          <img className="logo"alt="logo"  src={LOGO} />
        </Link>
        
        
      </div>
      <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
        <div className="navbar-menu">
          <Link to="/" className="navbar-item">
            Inicio
          </Link>
          <Link to="/help" className="navbar-item">
            Ayuda
          </Link>
          <Link to="/studio" className="navbar-item">
            Studio
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navsbar;
