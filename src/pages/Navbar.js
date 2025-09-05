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
              <span className="nav-link">Services</span>{" "}
              {/* Parent link nahi banaya */}
              <ul className="service_hover">
                <li>
                  <Link
                    to="/frontend"
                    className="nav-link"
                    onClick={() => setOpen(true)}
                  >
                    Frontend
                  </Link>
                </li>
                <li className="nav-item item-has-children">
                  <Link to="/Backend" className="nav-link">
                    Hook
                  </Link>

                  <ul className="hooksection">
                    <li>use state</li>
                    <li>use state</li>
                    <li>use state</li>
                    <li>use state</li>
                  </ul>
                </li>

                <li>
                  <Link
                    to="/Website"
                    className="nav-link"
                    onClick={() => setOpen(false)}
                  >
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Application"
                    className="nav-link"
                    onClick={() => setOpen(false)}
                  >
                    App Development
                  </Link>
                </li>
              </ul>
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
