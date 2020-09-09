const initialState = {
  history: [],
  chart: [],
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
        history: action.payload.data.result,
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
        history: action.payload.data.result,
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
        oreder_detail: action.payload.data.result,
      };
    case "GET_CHART_PENDING":
      return {
        ...state,
      };
    case "GET_CHART_REJECT":
      return {
        ...state,
      };
    case "GET_CHART_FULFILLED":
      return {
        ...state,
        chart: action.payload.data,
      };
    default:
      return state;
  }
};
export default order;
