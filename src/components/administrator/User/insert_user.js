import React, { Component } from "react";
import { connect } from "react-redux";
import { postUser } from "../../redux/actions/user";
import { withRouter } from "react-router-dom";
import { button, text } from "../../helpers/class_name.json";
class InsertUser extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    status: null,
  };

  onChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  postUser = async (event) => {
    event.preventDefault();
    await this.props.dispatch(postUser(this.state));
    await this.props.history.push("/admin/user");
  };

  render() {
    const SubmitButton = () => {
      if (Object.values(this.state).every((values) => values !== "" && values !== null)) {
        return (
          <button
            type="submit"
            className={`${button.primary} ${text.p3}`}
            onClick={this.postUser}
            data-dismiss="modal"
          >
            Submit
          </button>
        );
      } else {
        return (
          <button
            type="submit"
            className={`${button.primary} btn ${text.p3}`}
            disabled
          >
            Submit
          </button>
        );
      }
    };
    return (
      <>
        <div
          className="modal fade"
          id="modalInsertUser"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className={text.h2}>Insert User</div>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="needs-validation" noValidate>
                  <div className="form-group">
                    <div className={text.p1}>Name :</div>
                    <input
                      value={this.state.name}
                      name="name"
                      type="text"
                      className={`${text.p2} form-control`}
                      onChange={this.onChangeValue}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className={text.p1}>Email :</div>
                    <input
                      name="email"
                      type="text"
                      className={`${text.p2} form-control`}
                      placeholder="ex: youremail@mail.com"
                      onChange={this.onChangeValue}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className={text.p1}>Password :</div>
                    <input
                      name="password"
                      type="password"
                      className={`${text.p2} form-control`}
                      onChange={this.onChangeValue}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className={text.p1}>Status :</div>
                    <select
                      className={`${text.p2} form-select`}
                      onChange={this.onChangeValue}
                      name="status"
                      defaultValue={"default"}
                    >
                      <option className={text.p2} value={"default"}>
                        Choose user status..
                      </option>
                      <option className={text.p2} value={1}>
                        Administrator
                      </option>
                      <option className={text.p2} value={2}>
                        Cashier
                      </option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  data-dismiss="modal"
                  className={`${button["outline-primary"]} ${text.p3}`}
                >
                  Cancel
                </button>
                <SubmitButton />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(connect()(InsertUser));
