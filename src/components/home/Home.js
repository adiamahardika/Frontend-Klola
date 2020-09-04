import React, { Component, Fragment } from "react";
import Navbar from "../layout/Navbar";
import Products from "../product/Products";

class Home extends Component {
  onLogout() {
    localStorage.removeItem("user-id");
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    this.props.history.push("/login");
  }
  // componentDidMount(){
  //     if(!localStorage.getItem('isAuth')){
  //         this.props.history.push('/login')
  //     }
  // }
  render() {
    return (
      <Fragment>
        <div>
          <Navbar onLogout={this.onLogout.bind(this)} />
          <Products />
        </div>
      </Fragment>
    );
  }
}
export default Home;
