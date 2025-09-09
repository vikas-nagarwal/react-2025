import { Link } from "react-router-dom";
import React from "react";
const Home = () => {
  return (
    <React.Fragment>
      {" "}
      <div className="container py-4">
        <p>Software Development</p>
        {/* Example button using Link */}
        <Link to="/contact" className="btn btn-primary">
          Go to Contact
        </Link>
      </div>
      {/* Hero Section */}
      <section className="hero-section text-center py-5 bg-warning text-dark">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to MySite</h1>
          <p className="lead my-3">
            We provide top-notch Software and Web Development solutions.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg mt-2">
            Contact Us
          </Link>
        </div>
      </section>
      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">
                    Build responsive and modern websites for your business.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">App Development</h5>
                  <p className="card-text">
                    Create mobile applications for Android and iOS platforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Software Solutions</h5>
                  <p className="card-text">
                    Custom software for your business needs and automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="about-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <p className="text-center mx-auto" style={{ maxWidth: "700px" }}>
            At MySite, we are dedicated to delivering high-quality software and
            web solutions. Our team of experts focuses on building products that
            help businesses grow in the digital era.
          </p>
        </div>
      </section>
      {/* Call-to-action Section */}
      <section className="cta-section text-center py-5 bg-primary text-white">
        <div className="container">
          <h3 className="mb-3">Ready to start your project?</h3>
          <Link to="/contact" className="btn btn-light btn-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
