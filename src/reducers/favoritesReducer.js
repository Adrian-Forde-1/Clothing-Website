export const favoritesReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, action.favorite];
    case "REMOVE_FAVORITE":
      return state.filter(favorite => favorite.id !== action.favorite.id);
    default:
      break;
  }
};
