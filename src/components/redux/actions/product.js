import axios from "axios";
require("dotenv").config();

export const getAllProduct = () => {
  const authorization = localStorage.getItem("token");
  const userId = localStorage.getItem("user-id");
  return {
    type: "GET_PRODUCT",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/product`,
      headers: {
        authorization: authorization,
        "user-id": userId,
      },
    }),
  };
};
export const modifyProduct = (data) => {
  const authorization = localStorage.getItem("token");
  const userId = localStorage.getItem("user-id");
  const sort_by = data.sort_by || "name"
  const order_by = data.order_by || "ASC"
  const name = data.name || ""
  const category = data.category || ""
  const page = data.page || 1
  const limit = data.limit || 100
  return {
    type: "MODIFY_PRODUCT",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/product/?sort_by=${sort_by}&order_by=${order_by}&name=${name}&category=${category}&page=${page}&limit${limit}`,
      headers: {
        authorization: authorization,
        "user-id": userId,
      },
    }),
  };
};

export const postProduct = (data) => {
  const authorization = localStorage.getItem("token");
  const userId = localStorage.getItem("user-id");
  return {
    type: "POST_PRODUCT",
    payload: axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/product`,
      data: data,
      headers: {
        authorization: authorization,
        "user-id": userId,
      },
    }),
  };
};

export const deleteProduct = (productId) => {
  const authorization = localStorage.getItem("token");
  const userId = localStorage.getItem("user-id");
  return {
    type: "DELETE_PRODUCT",
    payload: axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API}/product/${productId}`,
      headers: {
        authorization: authorization,
        "user-id": userId,
      },
    }),
  };
};

export const patchProduct = (productId, data) => {
  const authorization = localStorage.getItem("token");
  const userId = localStorage.getItem("user-id");
  return {
    type: "PATCH_PRODUCT",
    payload: axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API}/product/${productId}`,
      data: data,
      headers: {
        authorization: authorization,
        "user-id": userId,
      },
    }),
  };
};
