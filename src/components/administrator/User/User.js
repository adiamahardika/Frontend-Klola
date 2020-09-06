import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUser } from "../../redux/actions/user";
import { text, button } from "../../helpers/class_name.json";
import Layout from "../../layout/Layout";
import ListUser from "./list_user";
import EditUser from "./edit_user";
import DeleteUser from "./delete_user";
import InsertUser from "./insert_user"
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
          <div className={text.h1}>Manage User</div>
          <div className="find-product-wrapper">
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
                  onClick={this.filterProduct}
                  value=""
                  className={`${text.p1} dropdown-item`}
                >
                  All
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
                  onClick={this.sortProduct}
                  className={`${text.p1} dropdown-item`}
                  value=""
                >
                  None
                </button>
              </div>
            </div>
            <select
              className="custom-select"
              onChange={this.orderProduct}
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
              onChange={this.searchProduct}
            />
          </div>
          <div className="admin-table user">
            <div className={text.p1}>No</div>
            <div className={text.p1}>Manage</div>
            <div className={text.p1}>Name</div>
            <div className={text.p1}>Email</div>
            <div className={text.p1}>Status</div>
            <div className={text.p1}>Date Created</div>
            <div className={text.p1}>Date Updated</div>
            {listUser}
          </div>
        </div>
        <InsertUser/>
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
