import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUser, findUser } from "../../redux/actions/user";
import { text, button } from "../../helpers/class_name.json";
import { routes } from "../../helpers/routes.json";
import Layout from "../../layout/layout";
import ListUser from "./list_user";
import EditUser from "./edit_user";
import DeleteUser from "./delete_user";
import InsertUser from "./insert_user";
import "../../css/admin/user.css";
import "../../css/components/wrapper.css";
import "../../css/components/button.css";
import "../../css/components/form.css";
import "../../css/components/text.css";
import "../../css/components/table.css";
class AdminUser extends Component {
  state = {
    selectUserEdit: [],
    selectUserDelete: [],
  };
  data = {
    name: "",
    status: "",
    sort_by: "",
    order_by: "",
  };
  componentDidMount() {
    this.props.dispatch(getAllUser());
  }
  onSelectUserEdit = (user) => {
    this.setState({
      selectUserEdit: user,
    });
  };
  onSelectUserDelete = (user) => {
    this.setState({
      selectUserDelete: user,
    });
  };

  searchUser = (event) => {
    const name = event.target.value;
    this.data.name = name;
    this.propsHistoryPush();
  };
  filterUser = (event) => {
    const status = event.target.value;
    this.data.status = status;
    this.propsHistoryPush();
  };
  sortUser = (event) => {
    const sort_by = event.target.value;
    this.data.sort_by = sort_by;
    this.propsHistoryPush();
  };
  orderUser = (event) => {
    const order_by = event.target.value;
    this.data.order_by = order_by;
    this.propsHistoryPush();
  };
  propsHistoryPush = () => {
    const data = this.data;
    let result = [];
    Object.keys(data).map((key) => {
      if (data[key] !== "") {
        return result.push(key + "=" + data[key]);
      } else {
        return "";
      }
    });
    if (result.length !== 0) {
      this.props.history.push(
        `${routes.admin + routes.user}/?${result.map((value) => {
          if (result.indexOf(value) === result.length - 1) {
            return value;
          } else {
            return value + "&";
          }
        })}`
      );
    } else {
      this.props.history.push(routes.admin + routes.user);
    }
    this.props.dispatch(findUser(data));
  };
  render() {
    const { user } = this.props;
    const listUser =
      user &&
      user.map((user, index) => (
        <ListUser
          key={index}
          index={index}
          user={user}
          onSelectUserEdit={this.onSelectUserEdit}
          onSelectUserDelete={this.onSelectUserDelete}
        />
      ));
    return (
      <Layout>
        <div className="admin-wrapper">
          <div className={text.h1}>User</div>
          <div className="form-admin-wrapper">
            <button
              type="button"
              className={`${button.primary} ${text.p3}`}
              data-toggle="modal"
              data-target="#modalInsertUser"
            >
              Insert
            </button>
            <div>
              <button
                type="button"
                data-target="#sort"
                data-toggle="dropdown"
                className="button-icon"
              >
                <ion-icon name="funnel" />
              </button>
              <div className="dropdown-menu">
                <button
                  onClick={this.filterUser}
                  value=""
                  className={`${text.p1} dropdown-item`}
                >
                  All
                </button>
                <button
                  onClick={this.filterUser}
                  value="1"
                  className={`${text.p1} dropdown-item`}
                >
                  Admin
                </button>
                <button
                  onClick={this.filterUser}
                  value="2"
                  className={`${text.p1} dropdown-item`}
                >
                  Cashier
                </button>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="button-icon"
                data-target="#sort"
                data-toggle="dropdown"
              >
                <ion-icon name="filter" />
              </button>
              <div className="dropdown-menu">
                <button
                  onClick={this.sortUser}
                  className={`${text.p1} dropdown-item`}
                  value=""
                >
                  None
                </button>
                <button
                  onClick={this.sortUser}
                  className={`${text.p1} dropdown-item`}
                  value="name"
                >
                  Name
                </button>
                <button
                  onClick={this.sortUser}
                  className={`${text.p1} dropdown-item`}
                  value="email"
                >
                  Email
                </button>
              </div>
            </div>
            <select
              className="custom-select"
              onChange={this.orderUser}
              defaultValue={""}
            >
              <option value="">ASC</option>
              <option value="DESC">DSC</option>
            </select>
            <input
              className={`${text.p1} form-control search`}
              type="text"
              placeholder="Search Product"
              aria-label="Search"
              onChange={this.searchUser}
            />
          </div>
          <div className="table user">
            <div className={`${text.p1} table-header number-column`}>No</div>
            <div className={`${text.p1} table-header`}>Manage</div>
            <div className={`${text.p1} table-header`}>Name</div>
            <div className={`${text.p1} table-header`}>Email</div>
            <div className={`${text.p1} table-header`}>Status</div>
            <div className={`${text.p1} table-header`}>Date Created</div>
            <div className={`${text.p1} table-header`}>Date Updated</div>
            {listUser}
          </div>
        </div>
        <InsertUser />
        <EditUser user={this.state.selectUserEdit} />
        <DeleteUser user={this.state.selectUserDelete} />
      </Layout>
    );
  }
}

const userStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(userStateToProps)(AdminUser);
