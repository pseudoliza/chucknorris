import React from 'react';
import { useFavourites } from '../../hooks/useFavourites';
import { Joke } from '../../components/Joke';
import { JokeItem } from '../../hooks/useJokes';
import { FavouritesContainer, FavouritesHeader, FavouritesItem, FavouritesList, NoFavouritesText } from './Favourites.styles';

const Favourites: React.FC = () => {
  const { favourites, removeFromFavourites } = useFavourites();

  return (
    <FavouritesContainer>
      <FavouritesHeader>Favourites</FavouritesHeader>
      {favourites.length > 0 ? (
        <FavouritesList>
          {favourites.map((joke: JokeItem) => (
            <FavouritesItem key={joke.id}>
              <Joke joke={joke} removeFromFavourites={removeFromFavourites} />
            </FavouritesItem>
          ))}
        </FavouritesList>
      ) : (
        <NoFavouritesText>No favourites yet.</NoFavouritesText>
      )}
    </FavouritesContainer>
  );
};

export default Favourites;