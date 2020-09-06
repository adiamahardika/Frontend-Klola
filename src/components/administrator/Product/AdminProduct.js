import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getAllProduct, modifyProduct } from "../../redux/actions/product";
import AdminCardProduct from "./AdminCardProduct";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";
import { withRouter } from "react-router";
import "./AdminProduct.css";
class AdminProducts extends Component {
  state = {
    sortBy: "",
    orderBy: "",
    name: "",
    category: "",
    page: "",
    showDelete: false,
    showEdit: false,
    selectProductDelete: null,
    selectProductEdit: [],
  };

  getAllProduct() {
    this.props.dispatch(getAllProduct());
  }

  componentDidMount() {
    if (!localStorage.getItem("isAuth")) {
      this.props.history.push("/login");
    }
    if (!localStorage.getItem("status") === 1) {
      this.props.history.push("/");
    }
    this.getAllProduct();
  }

  sortCategory = (event) => {
    event.preventDefault();
    this.setState({
      category: event.target.value,
    });
  };

  handleShowDelete = () => {
    this.setState({
      showDelete: true,
    });
  };
  handleCloseDelete = () => {
    this.setState({
      showDelete: false,
    });
  };

  onSelectProductDelete = (product) => {
    this.setState({
      selectProductDelete: product,
      showDelete: true,
    });
  };

  handleShowEdit = () => {
    this.setState({
      showEdit: true,
    });
  };
  handleCloseEdit = () => {
    this.setState({
      showEdit: false,
    });
  };

  onSelectProductEdit = (product) => {
    this.setState({
      selectProductEdit: product,
      showEdit: true,
    });
    console.log(this.state.selectProductEdit);
  };
  parseToRupiah(number) {
    var rupiah = "";
    var numberrev = number.toString().split("").reverse().join("");
    for (var i = 0; i < numberrev.length; i++)
      if (i % 3 === 0) rupiah += numberrev.substr(i, 3) + ".";
    return (
      "Rp. " +
      rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("")
    );
  }
  paginationProduct = (event) => {
    this.props.history.push(
      `/adminproduct?sortBy=${this.state.sortBy}&orderBy=${this.state.orderBy}&name=${this.state.name}&category=${this.props.category}&page=${event.target.id}`
    );
    console.log(event);
    this.props.dispatch(
      modifyProduct(
        this.state.sortBy,
        this.state.orderBy,
        this.state.name,
        this.state.category,
        event.target.id
      )
    );
  };
  render() {
    const { products } = this.props;
    const showProduct = products.map((item, index) => {
      return (
        <AdminCardProduct
          product={item}
          key={index}
          onSelectProductDelete={this.onSelectProductDelete}
          onSelectProductEdit={this.onSelectProductEdit}
          parseToRupiah={this.parseToRupiah}
        />
      );
    });
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <h2 className="title-product">Manage Product</h2>
            <div className="row product">
              <table className="tableProduct table-bordered table-hover table-responsive">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Manage</th>
                    <th scope="col">ID</th>
                    <th scope="col">Name Product</th>
                    <th scope="col">Description</th>
                    <th scope="col">Image</th>
                    <th scope="col">Category</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Date Created</th>
                    <th scope="col">Date Updated</th>
                  </tr>
                </thead>
                <tbody>{showProduct}</tbody>
              </table>
            </div>
          </div>
        </div>
        <DeleteProduct
          show={this.state.showDelete}
          onHide={this.handleCloseDelete}
          product={this.state.selectProductDelete}
        />
        <EditProduct
          show={this.state.showEdit}
          onHide={this.handleCloseEdit}
          product={this.state.selectProductEdit}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    pagination: state.products.pagination,
  };
};

export default withRouter(connect(mapStateToProps)(AdminProducts));
