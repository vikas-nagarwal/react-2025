import { Link } from "react-router-dom";
import { FaChartLine, FaChartPie, FaMobileAlt } from "react-icons/fa";

const Application = () => {
  return (
    <>
      <div className="application developer">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>

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

      {/* inforamtion section */}
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
                real value. From idea to launch, we craft high-performance
                mobile solutions that exceed expectations, drive growth, and
                boost your ROI.
              </p>
              <button type="button" class="btn btn-secondary">
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

      <div className="investment-section py-5">
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
                needs of businesses across industries. Our expertise spans from
                modernizing legacy apps to building fully customized mobile apps
                from the ground up.
              </p>
              <p className="text-secondary">
                Whether you’re looking to migrate platforms, enhance user
                experience, or integrate advanced features, our custom app
                development services ensure your app stands out in a competitive
                market and drives real business value.
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
      {/* inforamtion setion end */}
    </>
  );
};

export default Application;
