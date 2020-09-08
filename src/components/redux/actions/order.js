import axios from "axios";
require("dotenv").config();

export const checkout = (data) => {
  const authorization = localStorage.getItem("token");
  const userId = localStorage.getItem("user-id");
  return {
    type: "CHECKOUT",
    payload: axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/order`,
      data: data,
      headers: {
        authorization: authorization,
        "user-id": userId,
      },
    }),
  };
};

export const readOrder = () => {
  const authorization = localStorage.getItem("token");
  const userId = localStorage.getItem("user-id");
  return {
    type: "READ_ORDER",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/order/history`,
      headers: {
        authorization: authorization,
        "user-id": userId,
      },
    }),
  };
};

export const readOrderDetail = (id) => {
  const authorization = localStorage.getItem("token");
  const userId = localStorage.getItem("user-id");
  return {
    type: "READ_ORDER_DETAIL",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/order/history/${id}`,
      headers: {
        authorization: authorization,
        "user-id": userId,
      },
    }),
  };
};

export const chartOrder = (startDate, endDate) => {
  const authorization = localStorage.getItem("token");
  const userId = localStorage.getItem("user-id");
  return {
    type: "GET_HISTORY",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/order/chart?start=${startDate}&end=${endDate}`,
      headers: {
        authorization: authorization,
        "user-id": userId,
      },
    }),
  };
};
