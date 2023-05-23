import {useEffect, useState, useCallback} from "react";
import {type JokeItem} from "./useJokes";

export interface FavouritesHook {
  favourites: JokeItem[];
  addToFavourites: (joke: JokeItem) => void;
  removeFromFavourites: (joke: JokeItem) => void;
  isFavourite: (joke: JokeItem) => boolean;
}

export const useFavourites = (): FavouritesHook => {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites") ?? "[]"),
  );

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const isFavourite = (joke: JokeItem): boolean =>
    favourites.find((fav: JokeItem) => joke.id === fav.id);

  const addToFavourites = useCallback(
    (joke: JokeItem) => {
      if (favourites.length === 10) {
        alert("maximum favourites added, remove one to add new");
        return;
      }
      setFavourites((prevState: JokeItem[]) => {
        if (prevState.find((fav: JokeItem) => joke.id === fav.id) == null) {
          return [...prevState, joke];
        }
        return prevState;
      });
    },
    [favourites],
  );

  const removeFromFavourites = useCallback(
    (joke: JokeItem) => {
      const updatedFavourites = (prevState: JokeItem[]): JokeItem[] =>
        prevState.filter((fav: JokeItem) => fav.id !== joke.id);

      setFavourites((prevState: JokeItem[]) => updatedFavourites(prevState));
    },
    [favourites],
  );

  return {favourites, addToFavourites, removeFromFavourites, isFavourite};
};
