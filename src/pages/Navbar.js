import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../App.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          MySite
        </Link>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
          aria-controls="navbarNav"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Links */}
        <div
          className={`collapse navbar-collapse ${open ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                to="/home"
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/service"
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                Services
                <ul className="service_hover">
                  <li>Frontend</li>
                  <li>Backend</li>
                  <li>website developmen </li>
                  <li>website developmen </li>
                </ul>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/blogs"
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
