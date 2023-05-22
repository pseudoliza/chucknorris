import React from 'react';
import { JokeItem } from '../../hooks/useJokes';

interface IJoke {
  joke: JokeItem;
  addToFavourites?: (joke: JokeItem) => void;
  removeFromFavourites?: (joke: JokeItem) => void;
}

export const Joke = ({ joke, addToFavourites, removeFromFavourites }: IJoke) => (
  <div>
    <p>{joke.value}</p>
    {addToFavourites && <button onClick={() => addToFavourites(joke)}>
      Add to Favourites
    </button> }
    {removeFromFavourites && <button onClick={() => removeFromFavourites(joke)}>
      Remove
    </button>}
  </div>
);

export default Joke;