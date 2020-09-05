export const addCart = (data) => {
  return {
    type: "ADD_CART",
    payload: data,
  };
};

export const addQuantity = (id) => {
  return {
    type: "ADD_QUANTITY",
    payload: id,
  };
};

export const reduceQuantity = (id) => {
  return {
    type: "REDUCE_QUANTITY",
    payload: id,
  };
};
export const deleteCart = (data) => {
  return {
    type: "DELETE_CART",
    payload: data,
  };
};

export const cancelCart = (data) => {
  return {
    type: "CANCEL_CART",
    method: "DELETE",
    payload: data,
  };
};
