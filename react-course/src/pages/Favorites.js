import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
  const { favorites, totalFavorites } = useContext(FavoritesContext);

  return (
    <section>
      <h1>My Favorites</h1>
      {totalFavorites === 0
        ? <p>You got no favorites yet. Start adding some?</p>
        : <MeetupList meetups={favorites} />
      }
      
    </section>
  );
}

export default FavoritesPage;
