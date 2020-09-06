import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCategory } from "../../redux/actions/category";
import { text, button } from "../../helpers/class_name.json"
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
import "../../css/components/wrapper.css";
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
        <div className="admin-wrapper">
          <div className={text.h1}>Category</div>
          <div className="form-admin-wrapper">
            <button
              type="button"
              className={`${button.primary} ${text.p3}`}
              data-toggle="modal"
              data-target="#modalInsertCategory"
            >
              Insert
            </button>
            <input
              className={`${text.p3} form-control search`}
              type="text"
              placeholder="Search Category"
              aria-label="Search"
            />
          </div>
          <div className="admin-table category">
            <div className={text.p1}>No</div>
            <div className={text.p1}>Manage</div>
            <div className={text.p1}>Category Name</div>
            <div className={text.p1}>Date Created</div>
            <div className={text.p1}>Date Updated</div>
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
