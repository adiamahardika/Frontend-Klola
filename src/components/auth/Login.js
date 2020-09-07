import React, { Component, Fragment } from "react";
import axios from "axios";
import login from "../../images/login.png";
import "./login.css";
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
    if (localStorage.getItem("token")) {
      this.props.history.push("/");
    }
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API}/user/login`, this.state)
      .then((response) => {
        console.log(response.data);
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
      <Fragment>
        <img className="backgroundLogin" src={login} alt="background-login" />

        <div className="cardLogin">
          <div className="card-body">
            {/* <img src={logo} className="logo d-inline-block align-top" alt="logo"/> */}
            <div className="row justify-content-md-center">
              <div className="col">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="ex: youremail@mail.com"
                      name="email"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      name="password"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn"
                    align="right"
                    style={{
                      borderRadius: 25,
                      fontSize: "16px",
                      color: "white",
                      width: "100%",
                      backgroundColor: "#E91E63",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    LOGIN
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
