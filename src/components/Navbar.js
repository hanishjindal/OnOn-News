import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" style={titleAnchor} to="/">
            OnOn
            <b style={titleStyleSpam} className="fullFormSpam">
              One Nation <b>One News</b>
            </b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link mx-2" aria-current="page" to="../">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const titleAnchor = {
  top: "3px",
  position: "relative",
  left: "7px",
  marginRight: "30px",
};

const titleStyleSpam = {
  fontSize: "10px",
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  top: "-10px",
  left: "7px",
};

export default Navbar;
