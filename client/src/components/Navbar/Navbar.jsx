import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>DineSpace</h2>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-buttons">
        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          className="register-btn"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;