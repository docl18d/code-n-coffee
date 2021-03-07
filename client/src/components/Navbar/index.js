import React from "react";
import { Link } from "react-router-dom";
// import { useAuth0 } from '../react-auth0-spa';
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Code N Coffee
      </Link>
      {/* hamburger */}
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/login"
              className={
                window.location.pathname === "/login" || window.location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/addfido"
              className={window.location.pathname === "/addfido" ? "nav-link active" : "nav-link"}
            >
              Add Fido
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/bio"
              className={window.location.pathname === "/bio" ? "nav-link active" : "nav-link"}
            >
              Bio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/like"
              className={window.location.pathname === "/like" ? "nav-link active" : "nav-link"}
            >
              Likes
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/updatefido"
              className={window.location.pathname === "/updatefido" ? "nav-link active" : "nav-link"}
            >
              Update Fido
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/list"
              className={window.location.pathname === "/list" ? "nav-link active" : "nav-link"}
            >
              List
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/logout"
              className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
