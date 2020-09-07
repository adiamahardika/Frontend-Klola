import React, { Component } from "react";
import { connect } from "react-redux";
import { chartOrder } from "../redux/actions/order";
import { Line } from "react-chartjs-2";
import { text, button } from "../helpers/class_name.json";
import Calendar from "react-datepicker";
import moment from "moment";
import Layout from "../layout/Layout";
import "../css/order/chart.css";
import "../css/components/form.css";
import "react-datepicker/dist/react-datepicker.css";
class History extends Component {
  state = {
    start: new Date(),
    end: new Date(),
  };
  componentDidMount() {
    // if (!localStorage.getItem("isAuth")) {
    //   this.props.history.push("/login");
    // }
  }
  onStart = (event) => {
    this.setState({ start: event });
  };
  onEnd = (event) => {
    this.setState({ end: event });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const startDate = moment(this.state.start).format("MM-DD-YYYY");
    const endDate = moment(this.state.end).format("MM-DD-YYYY");
    this.props.dispatch(chartOrder(startDate, endDate));
  };

  render() {
    const { history } = this.props;
    let date = [];
    let total = [];
    let index = 0;
    history.forEach((item) => {
      date[index] = item.date;
      total[index] = item.total;
      index++;
    });
    const data = {
      labels: date,
      datasets: [
        {
          label: "Transaction History",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "#4285f4",
          // borderCapStyle: ,
          // borderDash: [],
          // borderDashOffset: 0.0,
          // borderJoinStyle: "miter",
          pointBorderColor: "#4285f4",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#4285f4",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: total,
        },
      ],
    };

    return (
      <Layout>
        <div className="chart-wrapper">
          <div className="start form-group">
            <div className={text.p1}>Start Date</div>
            <Calendar
              className={`${text.p2} form-control`}
              onChange={this.onStart}
              selected={this.state.start}
            />
          </div>
          <div className="end form-group">
            <div className={text.p1}>End Date</div>
            <Calendar
              className={`${text.p2} form-control`}
              onChange={this.onEnd}
              selected={this.state.end}
            />
          </div>
          <div className="submit">
            <button
              className={`${button.primary} ${text.p1}`}
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </div>
          <div className="chart">
            <Line className="line" data={data} />
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
export default connect(mapStateToProps)(History);
