import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import {useFavourites} from "../../hooks/useFavourites";
import Favourites from "./Favourites";
import {mockJoke, mockJokeList} from "../../../__mocks__/joke";

jest.mock("../../hooks/useFavourites");

describe("Favourites", () => {
  it("renders a list of favourite jokes", () => {
    // Manually mock the useFavourites hook
    (useFavourites as jest.Mock).mockReturnValue({
      favourites: mockJokeList,
      removeFromFavourites: jest.fn(),
    });

    render(<Favourites />);

    // Assert that the favourites are rendered
    mockJokeList.forEach(favourite => {
      expect(screen.getByText(favourite.value)).toBeInTheDocument();
    });
  });

  it("renders a message when there are no favourites", () => {
    const mockFavourites = [];

    // Manually mock the useFavourites hook
    (useFavourites as jest.Mock).mockReturnValue({
      favourites: mockFavourites,
      removeFromFavourites: jest.fn(),
    });

    render(<Favourites />);

    // Assert that the no favourites message is rendered
    expect(screen.getByText("No favourites yet.")).toBeInTheDocument();
  });

  it("calls removeFromFavourites when remove button is clicked", () => {
    const mockFavourites = [mockJoke];
    const mockRemoveFromFavourites = jest.fn();

    // Manually mock the useFavourites hook
    (useFavourites as jest.Mock).mockReturnValue({
      favourites: mockFavourites,
      removeFromFavourites: mockRemoveFromFavourites,
    });

    render(<Favourites />);

    expect(screen.getByRole("button", {name: "Remove"})).toBeInTheDocument();

    // Click the remove button
    fireEvent.click(screen.getByRole("button", {name: "Remove"}));

    // Assert that removeFromFavourites was called
    expect(mockRemoveFromFavourites).toHaveBeenCalledWith(mockFavourites[0]);
  });
});
