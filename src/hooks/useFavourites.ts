import { useEffect, useState, useCallback } from 'react';
import { JokeItem } from './useJokes';

export interface FavouritesHook {
  favourites: JokeItem[];
  addToFavourites: (joke: JokeItem) => void;
  removeFromFavourites: (joke: JokeItem) => void;
  isFavourite: (joke: JokeItem) => boolean;
}

export const useFavourites = (): FavouritesHook => {
  const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('favourites') || '[]'));

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);
  
  const isFavourite = (joke: JokeItem) => favourites.find((fav: JokeItem) => joke.id === fav.id);

  const addToFavourites = useCallback((joke: JokeItem) => {
    if (favourites.length === 10 && joke) {
      alert('maximum favourites added, remove one to add new');
      return;
    }
    setFavourites((favourites: JokeItem[]) => {
      if (!favourites.find((fav: JokeItem) => joke.id === fav.id)) {
        return [...favourites, joke];
      }
      return favourites;
    })
  }, [favourites]);

  const removeFromFavourites = useCallback((joke: JokeItem) => {    
    const updatedFavourites =(favourites: JokeItem[]): JokeItem[] => favourites.filter((fav: JokeItem) => fav.id !== joke.id);

    setFavourites((favourites: JokeItem[]) => updatedFavourites(favourites));
  }, [favourites]);

  return { favourites, addToFavourites, removeFromFavourites, isFavourite }; 
}