import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../css/layout/layout.css";
const Layout = (props) => {
  const onLogout = () => {
    localStorage.removeItem("user-id");
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    this.props.history.push("/login");
  };
  return (
    <div className="layout">
      <Sidebar onLogout={onLogout.bind(this)}/>
      {props.children}
    </div>
  );
};
export default Layout;
