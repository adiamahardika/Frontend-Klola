import React from "react";
import Sidebar from "./sidebar";
import "../css/layout/layout.css";
const Layout = (props) => {
  return (
    <div className="layout">
      <Sidebar/>
      {props.children}
    </div>
  );
};
export default Layout;
