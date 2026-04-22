import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import "../App.css";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <Link to="/" className="logo"><img src={logo} alt="logo" /></Link>

      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span className={`bar ${open ? "open" : ""}`} />
        <span className={`bar ${open ? "open" : ""}`} />
        <span className={`bar ${open ? "open" : ""}`} />
      </button>

      <nav className={`nav-links ${open ? "nav-open" : ""}`}>
        <Link to="/info" className={pathname === "/info" ? "active" : ""} onClick={() => setOpen(false)}>INFO</Link>
        <Link to="/activities" className={pathname === "/activities" ? "active" : ""} onClick={() => setOpen(false)}>ACTIVITIES</Link>
        <Link to="/rules" className={pathname === "/rules" ? "active" : ""} onClick={() => setOpen(false)}>RULES</Link>
        <Link to="/feedback" className={pathname === "/feedback" ? "active" : ""} onClick={() => setOpen(false)}>FEEDBACK</Link>
      </nav>
    </header>
  );
}
