const initialState = {
  carts: [],
  total: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      let filterCartId = state.carts.map((cart) => {
        if (cart.id === action.payload.id) {
          cart.qty += 1;
          return action.payload;
        }
        return cart;
      });
      let existedCartData = state.carts.find(
        (product) => product.id === action.payload.id
      );
      if (existedCartData) {
        return {
          ...state,
          carts: filterCartId,
          total: state.total + action.payload.price,
        };
      } else {
        let newTotal = state.total + action.payload.price;
        action.payload.qty = 1;
        return {
          ...state,
          carts: [...state.carts, action.payload],
          total: newTotal,
        };
      }

    case "ADD_QUANTITY":
      const addQuantity = state.carts.map((product) => {
        if (product.id === action.payload) {
          product.qty += 1;
        }
        return product;
      });
      let existedCartAdd = state.carts.find(
        (product) => product.id === action.payload
      );
      if (existedCartAdd) {
        return {
          ...state,
          carts: addQuantity,
          total: state.total + existedCartAdd.price,
        };
      }
      break;
    case "REDUCE_QUANTITY":
      const reduceQuantity = state.carts.map((product) => {
        if (product.id === action.payload) {
          product.qty = product.qty - 1;
        }
        return product;
      });
      let existedCartReduce = state.carts.find(
        (product) => product.id === action.payload
      );
      if (existedCartReduce.qty <= 0) {
        existedCartReduce.qty = 1;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          carts: reduceQuantity,
          total: state.total - existedCartReduce.price,
        };
      }

    case "DELETE_CART":
      const filterCartIdforDelete = state.carts.filter(
        (product) => product.id !== action.payload.id
      );
      let existedCartDelete = state.carts.find(
        (product) => product.id === action.payload.id
      );
      if (existedCartDelete) {
        return {
          ...state,
          carts: filterCartIdforDelete,
          total: state.total - existedCartDelete.price * existedCartDelete.qty,
        };
      }
      break;
    case "CANCEL_CART":
      return {
        ...state,
        carts: [],
        total: 0,
      };

    default:
      return state;
  }
};

export default cart;
