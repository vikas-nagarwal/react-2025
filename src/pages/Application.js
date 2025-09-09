import { Link } from "react-router-dom";

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
          <h1 className="display-4">Application Development</h1>
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
    </>
  );
};

export default Application;
