import React, { createContext, useReducer, useEffect } from "react";
import { favoritesReducer } from "../reducers/favoritesReducer";

export const FavoritesContext = createContext();

const FavoritesContextProvider = props => {
  const [favorites, favoriteDispatch] = useReducer(favoritesReducer, []);

  useEffect(() => {
    localStorage.setItem("Favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, favoriteDispatch }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
