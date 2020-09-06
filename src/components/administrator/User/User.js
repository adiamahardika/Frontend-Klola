import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getAllUser } from "../../redux/actions/user";
import UserItem from "./UserItem";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import "./User.css";
class User extends Component {
  state = {
    showEdit: false,
    showDelete: false,
    selectUserEdit: null,
    selectUserDelete: null,
  };
  componentDidMount() {
    this.getAllUser();
  }

  getAllUser() {
    this.props.dispatch(getAllUser());
  }

  onShowEdit = () => {
    this.setState({
      showEdit: true,
    });
  };
  onCloseEdit = () => {
    this.setState({
      showEdit: false,
    });
  };
  onSelectUserEdit = (user) => {
    this.setState({
      selectUserEdit: user,
      showEdit: true,
    });
  };
  onShowDelete = () => {
    this.setState({
      showDelete: true,
    });
  };
  onCloseDelete = () => {
    this.setState({
      showDelete: false,
    });
  };
  onSelectUserDelete = (user) => {
    this.setState({
      selectUserDelete: user,
      showDelete: true,
    });
  };
  render() {
    const { user } = this.props;
    const listUser = user && user.map((user, index) => (
      <UserItem
        key={index}
        user={user}
        onSelectUserEdit={this.onSelectUserEdit}
        onSelectUserDelete={this.onSelectUserDelete}
      />
    ));
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <h2 className="title-user">Manage User</h2>
            <div className="row user">
              <table className="tableUser table-bordered table-hover table-responsive">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Manage</th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date Updated</th>
                  </tr>
                </thead>
                <tbody>{listUser}</tbody>
              </table>
            </div>
          </div>
        </div>
        <EditUser
          show={this.state.showEdit}
          onHide={this.onCloseEdit}
          user={this.state.selectUserEdit}
        />
        <DeleteUser
          show={this.state.showDelete}
          onHide={this.onCloseDelete}
          user={this.state.selectUserDelete}
        />
      </Fragment>
    );
  }
}

const userStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(userStateToProps)(User);
