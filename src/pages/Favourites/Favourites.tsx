import React from 'react';
import { useFavourites } from '../../hooks/useFavourites';
import { Joke } from '../../components/Joke';
import { JokeItem } from '../../hooks/useJokes';

const Favourites: React.FC = () => {
  const { favourites, removeFromFavourites } = useFavourites();

  return (
    <div>
      <h2>Favourites</h2>
      {favourites.length > 0 ? (
        <ul>
          {favourites.map((joke: JokeItem) => (
            <li key={joke.id}>
              <Joke joke={joke} removeFromFavourites={removeFromFavourites} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No favourites yet. </p>
      )}
    </div>
  );
};

export default Favourites;