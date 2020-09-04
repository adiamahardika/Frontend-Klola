import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getAllCategory } from "../../redux/actions/category";
import AdminNavbar from "../../layout/AdminNavbar";
import AdminSidenav from "../../layout/AdminSidenav";
import CategoryItem from "./CategoryItem";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";
import "./Category.css";

class Category extends Component {
  state = {
    showEdit: false,
    showDelete: false,
    selectCategoryEdit: null,
    selectCategoryDelete: null,
  };
  componentDidMount() {
    this.getAllCategory();
  }

  getAllCategory() {
    this.props.dispatch(getAllCategory());
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
  onSelectCategoryEdit = (category) => {
    this.setState({
      selectCategoryEdit: category,
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
  onSelectCategoryDelete = (category) => {
    this.setState({
      selectCategoryDelete: category,
      showDelete: true,
    });
  };

  render() {
    const { categories } = this.props;
    const listCategories = categories && categories.map((category, index) => (
      <CategoryItem
        key={index}
        category={category}
        onSelectCategoryEdit={this.onSelectCategoryEdit}
        onSelectCategoryDelete={this.onSelectCategoryDelete}
      />
    ));
    return (
      <Fragment>
        <AdminNavbar />
        <AdminSidenav />
        <div className="container category">
          <div className="row">
            <h2 className="title-category">Manage Category</h2>
            <div className="row">
              <table className="tableCategory table-bordered table-hover">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Manage</th>
                    <th scope="col">ID</th>
                    <th scope="col">Name Category</th>
                  </tr>
                </thead>
                <tbody>{listCategories}</tbody>
              </table>
            </div>
          </div>
        </div>
        <EditCategory
          show={this.state.showEdit}
          onHide={this.onCloseEdit}
          category={this.state.selectCategoryEdit}
        />
        <DeleteCategory
          show={this.state.showDelete}
          onHide={this.onCloseDelete}
          category={this.state.selectCategoryDelete}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories,
  };
};

export default connect(mapStateToProps)(Category);
