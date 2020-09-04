import React, { Component } from "react";
import Layout from "../layout/Layout";
import CardProduct from "./CardProduct";
import Cart from "./Cart";
import { connect } from "react-redux";
import { getAllProduct, modifyProduct } from "../redux/actions/product";
import { addCart } from "../redux/actions/cart";
import { withRouter } from "react-router";
import "../css/home.css";
class Home extends Component {
  state = {
    product: [],
    category: "",
    selectProduct: null,
  };
  actSelectProduct = (products) => {
    this.setState({
      selectProduct: products,
    });
  };

  getAllProduct() {
    this.props.dispatch(getAllProduct());
  }

  componentDidMount() {
    this.getAllProduct();
  }
  addCart = (data) => {
    this.props.dispatch(addCart(data));
  };

  paginationProduct = (event) => {
    this.props.history.push(
      `/adminproduct?sortBy=${this.state.sortBy}&orderBy=${this.state.orderBy}&name=${this.state.name}&category=${this.props.category}&page=${event.target.id}`
    );

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
  // componentDidMount(){
  //     if(!localStorage.getItem('isAuth')){
  //         this.props.history.push('/login')
  //     }
  // }
  render() {
    const { products } = this.props;
    const showProduct =
      products &&
      products.map((item, index) => {
        return (
          <CardProduct
            product={item}
            key={index}
            selectProductItem={this.actSelectProduct}
            addCart={this.addCart}
          />
        );
      });
    return (
      <Layout>
        <div className="home">
          <div className="show-product">{showProduct}</div>
          <div className="cart">
            <Cart />
          </div>
        </div>
      </Layout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    pagination: state.products.pagination,
  };
};
export default withRouter(connect(mapStateToProps)(Home));
