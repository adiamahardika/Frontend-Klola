import axios from "axios";
require("dotenv").config();
export const getAllUser = () => {
  const authorization = localStorage.getItem("token");
  const userId = localStorage.getItem("user-id");
  return {
    type: "GET_USER",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/user`,
      headers: {
        authorization: authorization,
        "user-id": userId,
      },
    }),
  };
};

export const findUser = (data) => {
  const name = data.name || "";
  const status = parseInt(data.status) || "";
  const sort_by = data.sort_by || "name";
  const order_by = data.order_by || "ASC";
  return {
    type: "GET_USER",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/user/?name=${name}&status=${status}&sort_by=${sort_by}&order_by=${order_by}`,
    }),
  };
};

export const deleteUser = (id) => {
  const authorization = localStorage.getItem("token");
  const userId = localStorage.getItem("user-id");
  return {
    type: "DELETE_USER",
    payload: axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API}/user/${id}`,
      headers: {
        authorization: authorization,
        "user-id": userId,
      },
    }),
  };
};

export const postUser = (data) => {
  const authorization = localStorage.getItem("token");
  const userId = localStorage.getItem("user-id");
  return {
    type: "POST_USER",
    payload: axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/user/register`,
      data: data,
      headers: {
        authorization: authorization,
        "user-id": userId,
      },
    }),
  };
};

export const patchUser = (data, id) => {
  const authorization = localStorage.getItem("token");
  const userId = localStorage.getItem("user-id");
  return {
    type: "PATCH_USER",
    payload: axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API}/user/${id}`,
      data: data,
      headers: {
        authorization: authorization,
        "user-id": userId,
      },
    }),
  };
};
