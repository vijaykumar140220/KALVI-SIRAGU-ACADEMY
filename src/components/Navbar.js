import { useState, useEffect } from "react";
import logo from "../assets/logo1.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="academy-name">KALVI SIRAGU ACADEMY</h2>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {["home","about","courses","faculty","schedule","contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={`nav-item ${active === item ? "active" : ""}`}
              onClick={handleClick}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

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

