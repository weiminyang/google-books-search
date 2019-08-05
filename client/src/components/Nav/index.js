import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (


    <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <Link className="navbar-brand" to="/">
       Google Books
      </Link>
            <Link
              to="/search"
              className={
                window.location.pathname === "/" || window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
            <Link
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
            >
              Saved
            </Link>
    </nav>
  );
}

export default Nav;
