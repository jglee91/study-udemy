import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem({ id, image, title, address, description }) {
  const { add, remove, check } = useContext(FavoritesContext);

  const isFavoriteMeetup = check(id);

  function handleToggleFavoriteStatus() {
    if (isFavoriteMeetup) {
      remove(id);
    } else {
      add({ id, image, title, address, description });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
          </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={handleToggleFavoriteStatus}>
            {isFavoriteMeetup ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
