import React, { Component } from "react";
import { connect } from "react-redux";
import { checkout } from "../redux/actions/order";
import { cancelCart } from "../redux/actions/cart";
import { parseToRupiah } from "../helpers/index";
import { text, button } from "../helpers/class_name.json";
import { getAllProduct } from "../redux/actions/product";
import { routes } from "../helpers/routes.json";
import "../css/order/checkout.css";
import "../css/components/text.css";
import "../css/components/button.css";
import { withRouter } from "react-router-dom";
class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: localStorage.getItem("name"),
      id: parseInt(localStorage.getItem("user-id")),
    };
  }

  onChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  async checkout(cart) {
    const data = {
      user: this.state.id,
      product: this.props.carts,
      total: this.props.total,
    };
    await this.props.dispatch(checkout(data));
    await this.props.dispatch(cancelCart(cart));
    await this.props.dispatch(getAllProduct());
    await this.props.history.push(routes.home);
  }

  render() {
    const { carts, total } = this.props;
    return (
      <>
        <div
          className="modal fade"
          id="modalCheckout"
          role="dialog"
          data-backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className={text.h2}>Checkout</div>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body modal-checkout">
                <div className={text.p1}>No</div>
                <div className={text.p1}>Name</div>
                <div className={text.p1}>Quantity</div>
                <div className={text.p1}>Price</div>
                {carts.map((cart, index) => (
                  <>
                    <div className={text.p2}>{index + 1}</div>
                    <div className={`${text.p2} name`}>{cart.name}</div>
                    <div className={text.p2} style={{ textAlign: "center" }}>
                      {cart.qty}
                    </div>
                    <div className={`${text.p2} price`}>
                      {parseToRupiah(cart.price * cart.qty)}
                    </div>
                  </>
                ))}
                <div className={`${text.p1} total-checkout`}>
                  Total : {parseToRupiah(total)}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className={`${button["outline-primary"]} ${text.p3}`}
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className={`${button.primary} ${text.p3}`}
                  onClick={() => this.checkout(carts)}
                  data-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
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
export default withRouter(connect(mapStateToProps)(Checkout));
