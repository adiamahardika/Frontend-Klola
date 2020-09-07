import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "../css/layout/navbar.css";
import "../css/components/form.css";
class Navbar extends Component {
  render() {
    const { onLogout } = this.props;
    return (
      <nav className="navbar">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav-item dropdown">
          <div
            className="nav-link dropdown-toggle"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Hai, {localStorage.getItem("name")}
          </div>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link className="nav-link" to="/login" onClick={onLogout.bind(this)}>
              Logout
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(connect()(Navbar));
