import React from 'react';
import { JokeItem } from '../../hooks/useJokes';
import { Button, JokeContainer, JokeText } from './Joke.styles';

interface IJoke {
  joke: JokeItem;
  addToFavourites?: (joke: JokeItem) => void;
  removeFromFavourites?: (joke: JokeItem) => void;
}

export const Joke = ({ joke, addToFavourites, removeFromFavourites }: IJoke) => (
  <JokeContainer>
    <JokeText>{joke.value}</JokeText>
    {addToFavourites && <Button onClick={() => addToFavourites(joke)}>Add to Favourites</Button>}
    {removeFromFavourites && <Button onClick={() => removeFromFavourites(joke)}>Remove</Button>}
  </JokeContainer>
);

export default Joke;