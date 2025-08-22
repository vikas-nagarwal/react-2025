import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container py-4">
      <p>Software Development</p>
      {/* Example button using Link */}
      <Link to="/contact" className="btn btn-primary">
        Go to Contact
      </Link>
    </div>
  );
};

export default Home;
