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
    { name: "Term & Condition", path: "/Term-condition" },
  ];

  const quickLinks2 = [
    { name: "Servisssce", path: "/Service" },
    { name: "Blog", path: "/Blogs" },
    { name: "Contact", path: "/Contact" },
    { name: "About", path: "/About" },
    { name: "Term & Condition", path: "/Term-condition" },
  ];

  const quickLinks3 = [
    { name: "Servifffffffce", path: "/Service" },
    { name: "Blog", path: "/Blogs" },
    { name: "Contact", path: "/Contact" },
    { name: "About", path: "/About" },
    { name: "Term & Condition", path: "/Term-condition" },
  ];
  const quickLinks4 = [
    { name: "Servifffffffce", path: "/Service" },
    { name: "Blog", path: "/Blogs" },
    { name: "Contact", path: "/Contact" },
    { name: "About", path: "/About" },
    { name: "Term & Condition", path: "/Term-condition" },
    { name: "Privacy polocy", path: "/Privacy-polocy" },
  ];

  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-12 col-md-3 mb-4">
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

          {/* Column 2 */}
          <div className="col-12 col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks2.map((link, idx) => (
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

          {/* Column 3 */}
          <div className="col-12 col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks3.map((link, idx) => (
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
          <div className="col-12 col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks4.map((link, idx) => (
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
          <div className="col-12 mt-3">
            <p>
              The client must provide written approval (such as email) upon
              project completion. Once approved, the design, content, colors,
              navigation, and functionality will be considered finalized. Any
              changes after approval will incur additional charges by
              Coderssphere.
            </p>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-6">
                <p>
                  he client must provide written approval (such as email) upon
                  project completion. Once approved, the design, content,
                  colors, navigation, and functionality will b
                </p>
              </div>

              <div className="col-6">
                <p>
                  he client must provide written approval (such as email) upon
                  project completion. Once approved, the design, content,
                  colors, navigation, and functionality will b
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="clearfix">&nbsp;</div>
    </footer>
  );
};

export default Footer;
