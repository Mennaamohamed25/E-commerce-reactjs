export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("fired", action);
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.id !== action.payload.id),
      };

    default:
      return state;
  }
};
