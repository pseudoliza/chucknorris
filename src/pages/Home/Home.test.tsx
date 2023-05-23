import React from "react";
import {render, screen, fireEvent, within} from "@testing-library/react";
import Home from "./Home";
import {useFavourites} from "../../hooks/useFavourites";
import {useJokes} from "../../hooks/useJokes";
import {mockJokeList} from "../../../__mocks__/joke";

jest.mock("../../hooks/useFavourites");
jest.mock("../../hooks/useJokes");

describe("Home", () => {
  beforeEach(() => {
    (useFavourites as jest.Mock).mockReturnValue({
      addToFavourites: jest.fn(),
      isFavourite: jest.fn(),
    });

    (useJokes as jest.Mock).mockReturnValue({
      jokes: mockJokeList,
    });
  });

  it("renders a list of jokes", () => {
    render(<Home />);

    const jokeItems = screen.getAllByTestId(/joke-item-/i);
    expect(jokeItems).toHaveLength(2);

    jokeItems.forEach((jokeItem, index) => {
      const joke = screen.getByText(`Chuck Norris joke ${index + 1}`);
      expect(joke).toBeInTheDocument();
    });
  });

  it("calls addToFavourites when a joke is added", () => {
    const addToFavourites = jest.fn();

    (useFavourites as jest.Mock).mockReturnValue({
      addToFavourites,
      isFavourite: jest.fn(),
    });

    render(<Home />);

    const jokeItem = screen.getByTestId("joke-item-1");

    const addToFavouritesButton = within(jokeItem).getByRole("button", {
      name: /add to favourites/i,
    });

    fireEvent.click(addToFavouritesButton);

    expect(addToFavourites).toHaveBeenCalledWith(mockJokeList[0]);
  });
});
