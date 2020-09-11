import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllProduct } from "../../redux/actions/product";
import { withRouter } from "react-router";
import { button, text } from "../../helpers/class_name.json";
import { getAllCategory } from "../../redux/actions/category";
import Layout from "../../layout/layout";
import ListProduct from "./list_product";
import InsertProduct from "./insert_product";
import DeleteProduct from "./delete_product";
import EditProduct from "./edit_product";
import "../../css/admin/product.css";
import "../../css/components/button.css";
import "../../css/components/table.css";
import "../../css/components/form.css";
import "../../css/components/text.css";
import "../../css/components/wrapper.css";
import "../../css/components/image.css";
class AdminProducts extends Component {
  state = {
    sort_by: "",
    order_by: "",
    name: "",
    category: "",
    page: "",
    limit: "",
    selectProductDelete: [],
    selectProductEdit: [],
  };

  componentDidMount() {
    // if (!localStorage.getItem("isAuth")) {
    //   this.props.history.push("/login");
    // }
    // if (!localStorage.getItem("status") === 1) {
    //   this.props.history.push("/");
    // }
    this.props.dispatch(getAllProduct());
    this.props.dispatch(getAllCategory());
  }

  sortCategory = (event) => {
    event.preventDefault();
    this.setState({
      category: event.target.value,
    });
  };

  onSelectProductDelete = (product) => {
    this.setState({
      selectProductDelete: product,
      showDelete: true,
    });
  };

  onSelectProductEdit = (product) => {
    this.setState({
      selectProductEdit: product,
      showEdit: true,
    });
  };

  render() {
    const { products, categories } = this.props;
    const showProduct = products.map((item, index) => {
      return (
        <ListProduct
          product={item}
          key={index}
          index={index}
          onSelectProductDelete={this.onSelectProductDelete}
          onSelectProductEdit={this.onSelectProductEdit}
        />
      );
    });
    return (
      <Layout>
        <div className="admin-wrapper">
          <h2 className={text.h1}>Product</h2>
          <div className="form-admin-wrapper">
            <button
              type="button"
              className={`${button.primary} ${text.p3}`}
              data-toggle="modal"
              data-target="#modalInsertProduct"
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
                {categories.map((category) => (
                  <button
                    onClick={this.filterProduct}
                    value={category.id}
                    className={`${text.p1} dropdown-item`}
                  >
                    {category.name}
                  </button>
                ))}
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
              className={`${text.p3} form-control search`}
              type="text"
              placeholder="Search Category"
              aria-label="Search"
            />
          </div>
          <div className="admin-table product">
            <div className={text.p1}>No</div>
            <div className={text.p1}>Manage</div>
            <div className={text.p1}>Image</div>
            <div className={text.p1}>Name</div>
            <div className={text.p1}>Category</div>
            <div className={text.p1}>Quantity</div>
            <div className={text.p1}>Price</div>
            <div className={text.p1}>Date Created</div>
            <div className={text.p1}>Date Updated</div>
            {showProduct}
          </div>
        </div>
        <InsertProduct />
        <DeleteProduct product={this.state.selectProductDelete} />
        <EditProduct product={this.state.selectProductEdit} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    pagination: state.products.pagination,
    categories: state.category.categories,
  };
};

export default withRouter(connect(mapStateToProps)(AdminProducts));
