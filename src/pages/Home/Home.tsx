import React from 'react';
import { useFavourites } from '../../hooks/useFavourites';
import { useJokes } from '../../hooks/useJokes';
import { Joke } from '../../components/Joke';

const Home: React.FC = () => {
  const { addToFavourites } = useFavourites();
  const { jokes }= useJokes();

  return (
    <div>
    <ul>
      {jokes.map((joke) => (
        <li key={joke.id} data-testid={`joke-item-${joke.id}`}>
          <Joke joke={joke} addToFavourites={addToFavourites} />
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Home;
