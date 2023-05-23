import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import {Joke} from "./Joke";
import {mockJoke} from "../../../__mocks__/joke";

describe("Joke", () => {
  it("renders the joke value", () => {
    render(<Joke joke={mockJoke} />);

    expect(screen.getByText(mockJoke.value)).toBeInTheDocument();
  });

  it('calls addToFavourites when "Add to Favourites" button is clicked', () => {
    const mockAddToFavourites = jest.fn();

    render(<Joke joke={mockJoke} addToFavourites={mockAddToFavourites} />);

    const addToFavouritesButton = screen.getByRole("button", {
      name: "Add to Favourites",
    });
    fireEvent.click(addToFavouritesButton);

    expect(mockAddToFavourites).toHaveBeenCalledWith(mockJoke);
  });

  it('calls removeFromFavourites when "Remove" button is clicked', () => {
    const mockRemoveFromFavourites = jest.fn();

    render(
      <Joke joke={mockJoke} removeFromFavourites={mockRemoveFromFavourites} />,
    );

    const removeFromFavouritesButton = screen.getByRole("button", {
      name: "Remove",
    });
    fireEvent.click(removeFromFavouritesButton);

    expect(mockRemoveFromFavourites).toHaveBeenCalledWith(mockJoke);
  });
});
