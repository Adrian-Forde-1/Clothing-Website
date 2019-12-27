export const cartReducer = (state, action) => {
  console.log("called");
  switch (action.type) {
    case "ADD_CART":
      return [...state, action.cart];
    case "REMOVE_CART":
      return state.filter(cart => cart.id !== action.cart.id);
    default:
      break;
  }
};
