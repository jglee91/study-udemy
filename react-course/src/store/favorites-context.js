import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  add: (meetup) => {},
  remove: (meetupId) => {},
  check: (meetupId) => {},
});

export function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavorite(meetup) {
    setUserFavorites((prev) => prev.concat(meetup));
  }

  function removeFavorite(meetupId) {
    setUserFavorites((prev) => prev.filter((meetup) => meetup.id !== meetupId));
  }

  function checkFavoriteMeetup(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    add: addFavorite,
    remove: removeFavorite,
    check: checkFavoriteMeetup,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
