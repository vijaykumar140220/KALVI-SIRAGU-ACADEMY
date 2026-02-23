import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/Kalvi siragu academy logo.jpeg";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu after clicking link (mobile)
  };

  return (
    <nav className="navbar">
      
      {/* LEFT SIDE */}
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="academy-name">KALVI SIRAGU ACADEMY</h2>
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" className="nav-item" onClick={handleLinkClick}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className="nav-item" onClick={handleLinkClick}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/courses" className="nav-item" onClick={handleLinkClick}>
            Courses
          </NavLink>
        </li>

        <li>
          <NavLink to="/faculty" className="nav-item" onClick={handleLinkClick}>
            Faculty
          </NavLink>
        </li>

        <li>
          <NavLink to="/schedule" className="nav-item" onClick={handleLinkClick}>
            Schedule
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className="nav-item" onClick={handleLinkClick}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* HAMBURGER ICON */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  );
}

export default Navbar;
