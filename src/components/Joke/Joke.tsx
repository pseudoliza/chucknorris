import React from "react";
import {type JokeItem} from "../../hooks/useJokes";
import {Button, JokeContainer, JokeText} from "./Joke.styles";

interface IJoke {
  joke: JokeItem;
  addToFavourites?: (joke: JokeItem) => void;
  removeFromFavourites?: (joke: JokeItem) => void;
}

export const Joke: React.FC<IJoke> = ({
  joke,
  addToFavourites,
  removeFromFavourites,
}) => (
  <JokeContainer>
    <JokeText>{joke.value}</JokeText>
    {addToFavourites != null && (
      <Button
        onClick={() => {
          addToFavourites(joke);
        }}>
        Add to Favourites
      </Button>
    )}
    {removeFromFavourites != null && (
      <Button
        onClick={() => {
          removeFromFavourites(joke);
        }}>
        Remove
      </Button>
    )}
  </JokeContainer>
);

export default Joke;
