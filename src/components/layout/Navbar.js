import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { modifyProduct } from "../redux/actions/product";
import { withRouter } from "react-router";
import "../css/layout/navbar.css";
import "../css/components/form.css";
class Navbar extends Component {
  state = {
    sortBy: "",
    orderBy: "",
    name: "",
    category: "",
    page: "",
  };
  searchProduct = (event) => {
    this.props.history.push(
      `?sortBy=${this.state.sortBy}&orderBy=${this.state.orderBy}&name=${event.target.value}&category=${this.props.category}&page=${this.state.page}`
    );

    this.props.dispatch(
      modifyProduct(
        this.state.sortBy,
        this.state.orderBy,
        event.target.value,
        this.state.category,
        this.state.page
      )
    );
  };
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
          <span class="navbar-toggler-icon"></span>
        </button>
        <input
          className="form-control search"
          type="text"
          placeholder="Search Product"
          aria-label="Search"
          onChange={this.searchProduct}
        />
        <div className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Hai, {localStorage.getItem("name")}
          </Link>
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
