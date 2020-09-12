import React, { Component } from "react";
import { connect } from "react-redux";
import { readOrder } from "../redux/actions/order";
import { withRouter } from "react-router-dom";
import { text } from "../helpers/class_name.json";
import { parseDate, parseToRupiah } from "../helpers/index";
import Layout from "../layout/layout";
import "../css/components/form.css";
import "../css/components/text.css";
import "../css/components/table.css";
import "../css/order/history.css";
class History extends Component {
  componentDidMount() {
    this.props.dispatch(readOrder());
  }
  render() {
    const { history } = this.props;
    return (
      <Layout>
        <div className="history-wrapper">
          <div className={`${text.h1} history-title`}>Transaction History</div>
          <div className="find-product-wrapper transaction-history">
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
                <button className={`${text.p1} dropdown-item`} value="">
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
              className={`${text.p1} form-control search`}
              type="text"
              placeholder="Search Product"
              aria-label="Search"
              onChange={this.searchProduct}
            />
          </div>
          <div className="table history">
            <div className={`${text.p1} table-header`}>No</div>
            <div className={`${text.p1} table-header`}>Transaction Id</div>
            <div className={`${text.p1} table-header`}>User</div>
            <div className={`${text.p1} table-header`}>Total Transaction</div>
            <div className={`${text.p1} table-header`}>Date Created</div>
            {history.map((item, index) => {
              return (
                <>
                  <div className={`${text.p2}`}>{index + 1}</div>
                  <div className={`${text.p2} left`}>{item.purchase_id}</div>
                  <div className={`${text.p2} left`}>{item.user_name}</div>
                  <div className={`${text.p2} total-transaction`}>
                    {parseToRupiah(item.total)}
                  </div>
                  <div className={`${text.p2}`}>
                    {parseDate(item.date_created)}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    history: state.order.history,
  };
};
export default withRouter(connect(mapStateToProps)(History));
