import React from "react";
import {useFavourites} from "../../hooks/useFavourites";
import {useJokes} from "../../hooks/useJokes";
import {Joke} from "../../components/Joke";
import {HomeContainer, JokeItem, JokeList} from "./Home.styles";

const Home: React.FC = () => {
  const {addToFavourites, isFavourite, removeFromFavourites} = useFavourites();
  const {jokes} = useJokes();

  return (
    <HomeContainer>
      <JokeList>
        {jokes.map(joke => (
          <JokeItem key={joke.id} data-testid={`joke-item-${joke.id}`}>
            <Joke
              joke={joke}
              {...(isFavourite(joke)
                ? {removeFromFavourites}
                : {addToFavourites})}
            />
          </JokeItem>
        ))}
      </JokeList>
    </HomeContainer>
  );
};

export default Home;
