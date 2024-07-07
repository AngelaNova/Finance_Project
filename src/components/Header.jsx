import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure you have Bootstrap CSS imported

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light p-3"
      id="Header"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Finance App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/expense-management">
                Expense Management
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/income-management">
                Income Management
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/financial-summary">
                Financial Summary
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
