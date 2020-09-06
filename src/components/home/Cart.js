import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addCart,
  addQuantity,
  reduceQuantity,
  deleteCart,
  cancelCart,
} from "../redux/actions/cart";
import { parseToRupiah } from "../helpers/index";
import { text, button } from "../helpers/class_name.json";
import Checkout from "../order/Checkout";
import empty from "../../images/empty-cart.png";
import "../css/home/cart.css";
import "../css/components/button.css";
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
    const checkout = () => {
      if (total > 0) {
        return (
          <button
            type="button"
            className={`${button.primary} ${text.p1}`}
            onClick={this.handleShow}
          >
            Checkout
          </button>
        );
      } else {
        return (
          <button type="button" className={`${button.primary} btn ${text.p1}`} disabled>
            Checkout
          </button>
        );
      }
    };
    return (
      <>
        <div className={`${text.h2} cart-title`}>Cart</div>
        {carts.length !== 0 ? (
          <div className="product-list-wrapper">
            {carts.map((cart) => (
              <div className="product-list">
                <img src={cart.image} alt="" className="cart-image" />
                <div className={`${text.p1} cart-name`}>{cart.name}</div>
                <div className={`${text.p3} cart-price`}>
                  {parseToRupiah(cart.price * cart.qty)}
                </div>
                <div className={`cart-quantity`}>
                  <button
                    type="button"
                    className={`${text.p1} button-icon`}
                    onClick={() => this.reduceQuantity(cart.id)}
                  >
                    -
                  </button>
                  <div className={`${text.p1} cart-form`}>{cart.qty}</div>
                  <button
                    type="button"
                    className={`${text.p1} button-icon`}
                    onClick={() => this.addQuantity(cart)}
                  >
                    +
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
        ) : (
          <div className="cart-image-empty-wrapper">
            <img src={empty} className="image-empty" alt="empty-cart" />
            <div className={`${text.h2} empty`}>Your Cart is Empty!</div>
          </div>
        )}
        <div className="cart-bottom">
          <div className="total">
            <div className={text.h2}>Total:</div>
            <div className={text.h2}>{parseToRupiah(total)}</div>
          </div>
          <div className="button-cart-wrapper">
            <button
              type="button"
              className={`${button["outline-primary"]} ${text.p1}`}
              onClick={this.cancelCart}
            >
              Cancel
            </button>
            {checkout()}
          </div>
          <Checkout show={this.state.show} onHide={this.handleClose} />
        </div>
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
