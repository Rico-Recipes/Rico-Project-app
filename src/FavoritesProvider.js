import React, { createContext, useState } from 'react';

// import { DUMMY_DATA } from './App';
export const FavoritesContext = createContext();



function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  
  function addFavorite(favorite) {
    setFavorites([
      ...favorites, 
      favorite
    ]);
  }

  function removeFavorite(title) {

    setFavorites(favorites.filter((favorite) => title !== favorite));
  }

  return (
    <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite}}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesProvider };
