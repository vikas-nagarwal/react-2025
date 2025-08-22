import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Footer = () => {
  const quickLinks = [
    { name: "Service", path: "/Service" },
    { name: "Blog", path: "/Blogs" },
    { name: "Contact", path: "/Contact" },
    { name: "About", path: "/About" },
    { name: "Term & Condition", path: "/" },
  ];

  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="col-12 col-md-4 mb-4">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  {quickLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        className="text-light text-decoration-none"
                        to={link.path}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <div className="row">
          <div className="col-12 text-center mt-3">
            <p className="mb-0">© 2025 MySite. All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className="clearfix">&nbsp;</div>
    </footer>
  );
};

export default Footer;
