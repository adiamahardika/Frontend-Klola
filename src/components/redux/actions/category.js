import axios from "axios";
require("dotenv").config();
export const getAllCategory = () => {
  const authorization = localStorage.getItem("token");
  const userId = localStorage.getItem("user-id");
  return {
    type: "GET_CATEGORY",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/category`,
      headers: {
        authorization: authorization,
        "user-id": userId,
      },
    }),
  };
};
export const findCategory = (data) => {
  const name = data.name;
  return {
    type: "GET_CATEGORY",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/category/?name=${name}`,
    }),
  };
};
export const postCategory = (data) => {
  const authorization = localStorage.getItem("token");
  const userId = localStorage.getItem("user-id");
  return {
    type: "POST_CATEGORY",
    payload: axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/category`,
      data: data,
      headers: {
        authorization: authorization,
        "user-id": userId,
      },
    }),
  };
};

export const patchCategory = (data, categoryId) => {
  const authorization = localStorage.getItem("token");
  const userId = localStorage.getItem("user-id");
  return {
    type: "PATCH_CATEGORY",
    payload: axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API}/category/${categoryId}`,
      data: data,
      headers: {
        authorization: authorization,
        "user-id": userId,
      },
    }),
  };
};

export const deleteCategory = (categoryId) => {
  const authorization = localStorage.getItem("token");
  const userId = localStorage.getItem("user-id");
  return {
    type: "DELETE_CATEGORY",
    payload: axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API}/category/${categoryId}`,
      headers: {
        authorization: authorization,
        "user-id": userId,
      },
    }),
  };
};
