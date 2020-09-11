import React, { Component } from "react";
import { connect } from "react-redux";
import { patchUser } from "../../redux/actions/user";
import { text, button } from "../../helpers/class_name.json";
import { routes } from "../../helpers/routes.json";
import { withRouter } from "react-router-dom";
class EditUser extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    status: null,
  };
  componentWillReceiveProps({ user }) {
    console.log(user);
    this.setState({
      id: user.id,
      name: user.name,
      email: user.email,
      status: user.status,
    });
  }
  onChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  patchUser = async (event) => {
    event.preventDefault();
    const id = this.state.id;
    const data = {
      name: this.state.name,
      email: this.state.email,
      status: this.state.status,
    };
    await this.props.dispatch(patchUser(data, id));
    await this.props.history.push(routes.admin + routes.user);
  };

  render() {
    const SubmitButton = () => {
      if (
        Object.values(this.state).every(
          (values) => values !== "" && values !== null
        )
      ) {
        return (
          <button
            type="submit"
            className={`${button.primary} ${text.p3}`}
            onClick={this.patchUser}
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
          id="modalEditUser"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className={text.h2}>Edit User</div>
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
                      value={this.state.email}
                      name="email"
                      type="text"
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
                      <option className={text.p2} value={"default"} disabled>
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
export default withRouter(connect()(EditUser));
