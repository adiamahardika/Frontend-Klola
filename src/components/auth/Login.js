import React, { Component } from "react";
import axios from "axios";
import "../css/auth/login.css";
import "../css/components/button.css";
import "../css/components/form.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { text, button } from "../helpers/class_name.json";
require("dotenv").config();
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    // if (localStorage.getItem("token")) {
    //   this.props.history.push("/");
    // }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API}/user/login`, this.state)
      .then((response) => {
        localStorage.setItem("token", response.data.result.token);
        localStorage.setItem("user-id", response.data.result.id);
        localStorage.setItem("status", response.data.result.status);
        localStorage.setItem("name", response.data.result.name);
        localStorage.setItem("isAuth", true);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="login-wrapper">
        <div className="card-login">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label className={text.p1}>Email</label>
              <input
                type="email"
                className={`form-control ${text.p2}`}
                placeholder="ex: youremail@mail.com"
                name="email"
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group">
              <label className={text.p1}>Password</label>
              <input
                type="password"
                className={`form-control ${text.p2}`}
                placeholder="Enter password"
                name="password"
                onChange={this.onChange}
                required
              />
            </div>
            <button type="submit" className={`${button.primary} ${text.p1}`}>
              LOGIN
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(Login));
