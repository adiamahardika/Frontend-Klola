const initialState = {
  categories: [],
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CATEGORY_PENDING":
      return {
        ...state,
      };
    case "GET_CATEGORY_REJECTED":
      return {
        ...state,
      };
    case "GET_CATEGORY_FULFILLED":
      return {
        ...state,
        categories: action.payload.data.result,
      };

    case "POST_CATEGORY_PENDING":
      return {
        ...state,
      };

    case "POST_CATEGORY_REJECTED":
      return {
        ...state,
      };

    case "POST_CATEGORY_FULFILLED":
      return {
        ...state,
        categories: action.payload.data.result,
      };
    case "PATCH_CATEGORY_PENDING":
      return {
        ...state,
      };

    case "PATCH_CATEGORY_REJECTED":
      return {
        ...state,
      };

    case "PATCH_CATEGORY_FULFILLED":
      return {
        ...state,
        categories: action.payload.data.result,
      };
    case "DELETE_CATEGORY_PENDING":
      return {
        ...state,
      };
    case "DELETE_CATEGORY_REJECTED":
      return {
        ...state,
      };
    case "DELETE_CATEGORY_FULFILLED":
      return {
        ...state,
        categories: action.payload.data.result,
      };
    default:
      return state;
  }
};

export default category;
