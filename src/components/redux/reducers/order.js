const initialState = {
  history: [],
  oreder_detail: [],
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case "CHECKOUT_PENDING":
      return {
        ...state,
      };
    case "CHECKOUT_REJECT":
      return {
        ...state,
      };
    case "CHECKOUT_FULFILLED":
      return {
        ...state,
        history: action.payload.data,
      };
    case "READ_ORDER_PENDING":
      return {
        ...state,
      };
    case "READ_ORDER_REJECT":
      return {
        ...state,
      };
    case "READ_ORDER_FULFILLED":
      return {
        ...state,
        history: action.payload.data,
      };
    case "READ_ORDER_DETAIL_PENDING":
      return {
        ...state,
      };
    case "READ_ORDER_DETAIL_REJECT":
      return {
        ...state,
      };
    case "READ_ORDER_DETAIL_FULFILLED":
      return {
        ...state,
        oreder_detail: action.payload.data,
      };
    case "GET_HISTORY_PENDING":
      return {
        ...state,
      };
    case "GET_HISTORY_REJECT":
      return {
        ...state,
      };
    case "GET_HISTORY_FULFILLED":
      return {
        ...state,
        history: action.payload.data,
      };
    default:
      return state;
  }
};
export default order;
