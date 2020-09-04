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
export const modifyProduct = (sortBy, orderBy, name, category, page) => {
  const authorization = localStorage.getItem("token");
  const userId = localStorage.getItem("user-id");
  return {
    type: "MODIFY_PRODUCT",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/product/?sortBy=${sortBy}&orderBy=${orderBy}&name=${name}&category=${category}&page=${page}`,
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
