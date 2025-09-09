import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

export default function Navbar() {
  const [open, setOpen] = useState(false); // Main navbar toggle
  const [serviceOpen, setServiceOpen] = useState(false); // Services toggle
  const [hookOpen, setHookOpen] = useState(false); // Hook toggle

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src="./img.png" alt="MySite Logo" style={{ height: "40px" }} />
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

            {/* Services with mobile click */}
            <li className="nav-item">
              <span
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => setServiceOpen(!serviceOpen)}
              >
                Services
              </span>

              <ul className={`service_hover ${serviceOpen ? "show" : ""}`}>
                <li>
                  <Link
                    to="/frontend"
                    className="nav-link"
                    onClick={() => setOpen(false)}
                  >
                    Frontend
                  </Link>
                </li>
                <li>
                  <span
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={() => setHookOpen(!hookOpen)}
                  >
                    Hook
                  </span>
                  <ul className={`hooksection ${hookOpen ? "show" : ""}`}>
                    <li>
                      <Link
                        to="/UseState"
                        className="nav-link"
                        onClick={() => setOpen(false)}
                      >
                        UseState
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/useEffect"
                        className="nav-link"
                        onClick={() => setOpen(false)}
                      >
                        UseEffect
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/userdata"
                        className="nav-link"
                        onClick={() => setOpen(false)}
                      >
                        UseData
                      </Link>
                    </li>
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
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
