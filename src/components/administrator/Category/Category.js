import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCategory } from "../../redux/actions/category";
import Layout from "../../layout/Layout";
import ListCategory from "./list_category";
import EditCategory from "./edit_category";
import DeleteCategory from "./delete_category";
import InsertCategory from "./insert_category";
import "../../css/admin/category.css";
import "../../css/components/button.css";
import "../../css/components/table.css";
import "../../css/components/form.css";
import "../../css/components/text.css";
class Category extends Component {
  state = {
    selectCategoryEdit: null,
    selectCategoryDelete: [],
  };
  componentDidMount() {
    this.props.dispatch(getAllCategory());
  }
  onSelectCategoryEdit = (category) => {
    this.setState({
      selectCategoryEdit: category,
      showEdit: true,
    });
  };
  onSelectCategoryDelete = (category) => {
    this.setState({
      selectCategoryDelete: category,
    });
  };

  render() {
    const { categories } = this.props;
    const listCategories =
      categories &&
      categories.map((category, index) => (
        <ListCategory
          key={index}
          index={index}
          category={category}
          onSelectCategoryEdit={this.onSelectCategoryEdit}
          onSelectCategoryDelete={this.onSelectCategoryDelete}
        />
      ));
    return (
      <Layout>
        <div className="admin-category-wrapper">
          <div className="title-admin">Category</div>
          <div className="form-category-wrapper">
            <button
              type="button"
              className="button-primary"
              data-toggle="modal"
              data-target="#modalInsertCategory"
            >
              Insert
            </button>
            <input
              className="form-control search"
              type="text"
              placeholder="Search Category"
              aria-label="Search"
            />
          </div>
          <div className="table-category">
            <div className="table-header">No</div>
            <div className="table-header">Manage</div>
            <div className="table-header">Name Category</div>
            <div className="table-header">Date Created</div>
            <div className="table-header">Date Updated</div>
            {listCategories}
          </div>
        </div>
        <InsertCategory />
        <EditCategory category={this.state.selectCategoryEdit} />
        <DeleteCategory category={this.state.selectCategoryDelete} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories,
  };
};

export default connect(mapStateToProps)(Category);
