import { Link } from "react-router-dom";
import { FaChartLine, FaChartPie, FaMobileAlt } from "react-icons/fa";
import { useState } from "react";

const Application = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are my payment options?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sint, hic consequuntur consectetur...",
    },
    {
      question: "How can I invite collaborator to platform?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sint, hic consequuntur consectetur...",
    },
    {
      question: "Can I upgrade my plan?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sint, hic consequuntur consectetur...",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center py-5">
        <div className="container">
          <h1 className="display-4 text-color">
            Top Mobile App Development Company
          </h1>
          <p className="lead my-3 text-center">
            We build mobile and web applications that empower your business.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our App Development Services</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Android Apps</h5>
                  <p className="card-text">
                    Build responsive and high-performance Android applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">iOS Apps</h5>
                  <p className="card-text">
                    Develop iOS apps with modern UI and smooth performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Cross-Platform</h5>
                  <p className="card-text">
                    Create apps that work seamlessly on both Android & iOS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <div className="information_section py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 style={{ marginTop: "20px" }}>
                Top Mobile App Development Company
              </h3>
              <p>
                Want to turn your idea into a powerful mobile app? Partner with
                IMG Global Infotech, a leading mobile app development company,
                to build cutting-edge, user-friendly applications that deliver
                real value.
              </p>
              <button type="button" className="btn btn-secondary">
                Secondary
              </button>
            </div>
            <div className="col-12 col-md-6">
              <img
                className="img-fluid imgdfd"
                src="https://d1y41eupgbwbb2.cloudfront.net/images/mobileAppHeroImg.webp"
                alt="Mobile App Development Company"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Investment Section */}
      <div className="investment-section py-5 bg-dark">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-12 col-md-6 text-light">
              <h2 className="fw-bold">
                Why Invest in Customized Mobile App Development?
              </h2>
              <p className="mt-3 text-secondary">
                As a leading mobile app development company, IMG Global Infotech
                delivers tailored app solutions designed to meet the unique
                needs of businesses across industries.
              </p>

              {/* Stats Section */}
              <div className="row mt-4">
                <div className="col-4 text-center">
                  <FaChartLine size={30} className="mb-2" />
                  <h6>Global Market Size</h6>
                  <h4 className="fw-bold">$330 Bn</h4>
                </div>
                <div className="col-4 text-center">
                  <FaChartPie size={30} className="mb-2" />
                  <h6>Annual CAGR</h6>
                  <h4 className="fw-bold">14.3%</h4>
                </div>
                <div className="col-4 text-center">
                  <FaMobileAlt size={30} className="mb-2" />
                  <h6>Global App Downloads</h6>
                  <h4 className="fw-bold">36Bn+</h4>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-12 col-md-6 text-center">
              <img
                src="https://your-image-url.png"
                alt="Mobile App"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section py-5">
        <div className="container">
          <h2 className="faq__title mb-4">Frequently asked questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item mb-3">
              <div
                className="faq-question p-3 bg-light fw-bold"
                style={{ cursor: "pointer" }}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </div>
              {openIndex === index && (
                <p className="faq-answer mt-2 p-3 border">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Application;
