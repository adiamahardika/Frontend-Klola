import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/layout/sidebar.css";
import { Link, withRouter } from "react-router-dom";
class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div
          className="sidebar-menu dropdown-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#collapseMenuManage"
        >
          Management
        </div>
        <div className="collapse" id="collapseMenuManage">
          <ul>
            <li type="button" className="management-list">
              <Link to="/admin/category">Category</Link>
            </li>
            <li type="button" className="management-list">
              <Link to="/adminproduct">Product</Link>
            </li>
            <li type="button" className="management-list">
              <Link to="/admin/user">User</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default withRouter(connect()(Sidebar));
