import React, { Component } from "react";
import Layout from "../layout/layout";
import CardProduct from "./card_product";
import Cart from "./cart";
import { connect } from "react-redux";
import { getAllProduct, modifyProduct } from "../redux/actions/product";
import { getAllCategory } from "../redux/actions/category";
import { addCart } from "../redux/actions/cart";
import { withRouter } from "react-router";
import { text } from "../helpers/class_name.json"
import "../css/home/home.css";
import "../css/components/button.css";
import "../css/components/form.css";
class Home extends Component {
  state = {
    product: [],
    selectProduct: null,
  };
  data = {
    category: "",
    sortBy: "",
    orderBy: "",
    name: "",
    page: "",
  };
  actSelectProduct = (products) => {
    this.setState({
      selectProduct: products,
    });
  };
  componentDidMount() {
    this.props.dispatch(getAllProduct());
    this.props.dispatch(getAllCategory());
  }
  addCart = (data) => {
    this.props.dispatch(addCart(data));
  };
  searchProduct = (event) => {
    const name = event.target.value;
    this.data.name = name;
    this.propsHistoryPush();
  };
  filterProduct = (event) => {
    const category = event.target.value;
    this.data.category = category;
    this.propsHistoryPush();
  };
  sortProduct = (event) => {
    const sortBy = event.target.value;
    this.data.sortBy = sortBy;
    this.propsHistoryPush();
  };
  orderProduct = (event) => {
    const orderBy = event.target.value;
    this.data.orderBy = orderBy;
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
        `/?${result.map((value) => {
          if (result.indexOf(value) === result.length - 1) {
            return value;
          } else {
            return value + "&";
          }
        })}`
      );
    } else {
      this.props.history.push(`/`);
    }
    this.props.dispatch(modifyProduct(data));
  };
  // componentDidMount(){
  //     if(!localStorage.getItem('isAuth')){
  //         this.props.history.push('/login')
  //     }
  // }
  render() {
    const { products, categories } = this.props;
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
          <div className="product-wrapper">
            <div className="find-product-wrapper">
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
                  {categories.map((category, index) => (
                    <button
                      onClick={this.filterProduct}
                      className={`${text.p1} dropdown-item`}
                      key={index}
                      value={category.id}
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
                  <button
                    onClick={this.sortProduct}
                    className={`${text.p1} dropdown-item`}
                    value="name"
                  >
                    Name
                  </button>
                  <button
                    onClick={this.sortProduct}
                    className={`${text.p1} dropdown-item`}
                    value="price"
                  >
                    Price
                  </button>
                  <button
                    onClick={this.sortProduct}
                    className={`${text.p1} dropdown-item`}
                    value="quantity"
                  >
                    Stock
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
            <div className="show-product">{showProduct}</div>
          </div>
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
    categories: state.category.categories,
  };
};
export default withRouter(connect(mapStateToProps)(Home));
