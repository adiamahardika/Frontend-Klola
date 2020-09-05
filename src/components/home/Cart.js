import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addCart,
  addQuantity,
  reduceQuantity,
  deleteCart,
  cancelCart,
} from "../redux/actions/cart";
import Checkout from "../order/Checkout";
import empty from "../../images/empty-cart.png";
import { parseToRupiah } from "../helpers/index";
import "../css/home/cart.css";
import "../css/components/button.css"
class Cart extends Component {
  state = {
    show: false,
    count: 0,
    id: parseInt(localStorage.getItem("user-id")),
    name: localStorage.getItem("name"),
  };
  addCart = (data) => {
    this.props.dispatch(addCart(data));
  };
  addQuantity = (carts) => {
    if (carts.quantity > carts.qty) {
      this.props.dispatch(addQuantity(carts.id));
    } else alert("Stock unsufficient!");
  };
  reduceQuantity = (id) => {
    this.props.dispatch(reduceQuantity(id));
  };
  deleteCart = (cart) => {
    this.props.dispatch(deleteCart(cart));
  };
  cancelCart = (data) => {
    this.setState({
      show: false,
    });
    this.props.dispatch(cancelCart(data));
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    const { carts, total } = this.props;
    return (
      <>
        {carts.length !== 0 ? (
          <div className="cart-wrapper">
            <div className="product-list-wrapper">
              {carts.map((cart) => (
                <div className="product-list">
                  <img src={cart.image} alt="" className="cart-image" />
                  <div className="cart-name">{cart.name}</div>
                  <div className="cart-price">{parseToRupiah(cart.price * cart.qty)}</div>
                  <div className="cart-quantity">
                    <button
                      type="button"
                      className="button-icon"
                      onClick={() => this.reduceQuantity(cart.id)}
                    >
                      <ion-icon name="remove" />
                    </button>
                    <div className="cart-form">{cart.qty}</div>
                    <button
                      type="button"
                      className="button-icon"
                      onClick={() => this.addQuantity(cart)}
                    >
                      <ion-icon name="add" />
                    </button>
                    <button
                      type="button"
                      className="button-icon"
                      onClick={() => this.deleteCart(cart)}
                    >
                      <ion-icon name="trash" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="total">
            <div>Total:</div>
            <div>{parseToRupiah(total)}</div>
            </div>
            <div className="button-cart-wrapper">
            <button
              type="button"
              className="button-outline-primary"
              onClick={this.cancelCart}
            >
              Cancel
            </button>
            <button
              type="button"
              className="button-primary"
              onClick={this.handleShow}
            >
              Checkout
            </button>
            </div>
            <Checkout show={this.state.show} onHide={this.handleClose} />
          </div>
        ) : (
          <div className="cart-image-empty-wrapper">
            <img src={empty} className="image-empty" alt="empty-cart" />
            <div className="empty">Your Cart is Empty!</div>
          </div>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    carts: state.carts.carts,
    total: state.carts.total,
  };
};
export default connect(mapStateToProps)(Cart);
