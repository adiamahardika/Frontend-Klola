import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { routes } from "../helpers/routes.json";
import { text } from "../helpers/class_name.json";
import "../css/layout/sidebar.css";
import "../css/components/text.css";
import klola from "../../images/klola.svg";
class Sidebar extends Component {
  onLogout = () => {
    localStorage.removeItem("user-id");
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    this.props.history.push(routes.login);
  };
  render() {
    return (
      <div className="sidebar">
        <div className={`${text.h2} sidebar-menu`}>
          <img src={klola} alt="logo" />
        </div>
        <div className={`${text.h2} sidebar-menu`}>
          Hai, {localStorage.getItem("name")}
        </div>
        <div className={`${text.p1} sidebar-menu text-icon`} type="button">
          <ion-icon name="home"></ion-icon>
          <Link className={`${text.p1}`} to={routes.home}>
            Home
          </Link>
        </div>
        <div className={`${text.p1} sidebar-menu text-icon`}>
          <ion-icon name="settings"></ion-icon>
          <div
            className={`${text.p1} sidebar-menu dropdown-toggle`}
            type="button"
            data-toggle="collapse"
            data-target="#collapseMenuManage"
          >
            Administrator
          </div>
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
        <div className={`${text.p1} sidebar-menu text-icon`}>
          <ion-icon name="bar-chart"></ion-icon>
          <div
            className={`${text.p1} sidebar-menu dropdown-toggle`}
            type="button"
            data-toggle="collapse"
            data-target="#collapseMenuTrasaction"
          >
            Transaction
          </div>
        </div>
        <div className="collapse" id="collapseMenuTrasaction">
          <ul>
            <li type="button" className="management-list">
              <Link to={routes.chart}>Chart</Link>
            </li>
            <li type="button" className="management-list">
              <Link to={routes.history}>History</Link>
            </li>
          </ul>
        </div>
        <div className={`${text.p1} sidebar-menu text-icon`}>
          <ion-icon name="log-out"></ion-icon>
          <Link
            className={`${text.p1}`}
            to="/login"
            onClick={this.onLogout.bind(this)}
          >
            Logout
          </Link>
        </div>
      </div>
    );
  }
}
export default withRouter(connect()(Sidebar));
