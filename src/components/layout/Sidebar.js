import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { routes } from "../helpers/routes.json";
import "../css/layout/sidebar.css";
class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Link className="sidebar-menu" to={routes.home}>
          Home
        </Link>
        <div
          className="sidebar-menu dropdown-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#collapseMenuManage"
        >
          Administrator
        </div>
        <div className="collapse" id="collapseMenuManage">
          <ul>
            <li type="button" className="management-list">
              <Link to={routes.admin + routes.category}>Category</Link>
            </li>
            <li type="button" className="management-list">
              <Link to={routes.admin + routes.product}>Product</Link>
            </li>
            <li type="button" className="management-list">
              <Link to={routes.admin + routes.user}>User</Link>
            </li>
          </ul>
        </div>
        <Link className="sidebar-menu" to={routes.history}>
          History
        </Link>
      </div>
    );
  }
}
export default withRouter(connect()(Sidebar));
