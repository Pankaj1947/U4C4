import { GET_PRODUCTS } from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: {
          isLoading: false,
          isError: false,
          data: action.payload,
        },
      };
    }

    default: {
      return { ...state };
    }
  }
};
