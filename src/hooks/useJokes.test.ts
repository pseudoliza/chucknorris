import {mockJoke} from "./../../__mocks__/joke";
import {renderHook, act, waitFor} from "@testing-library/react";
import axios from "axios";
import {useJokes} from "./useJokes";

jest.mock("axios");

describe("useJokes", () => {
  it("fetches jokes and updates state", async () => {
    const mockedResponse = {
      data: mockJoke,
    };

    jest.spyOn(axios, "get").mockResolvedValue(mockedResponse);

    const {result, rerender} = renderHook(() => useJokes());

    expect(result.current.jokes).toEqual([]);

    act(() => {
      rerender();
    });

    await waitFor(() => {
      expect(result.current.jokes.length).toEqual(10);
    });
  });

  test("should clean up the interval on unmount", () => {
    // Create a mock for clearInterval
    const clearIntervalMock = jest.spyOn(window, "clearInterval");

    // Render the component
    const {unmount} = renderHook(() => useJokes());

    // Unmount the component
    unmount();

    // Assert that clearInterval has been called
    expect(clearIntervalMock).toHaveBeenCalled();

    // Restore the original clearInterval function
    clearIntervalMock.mockRestore();
  });
});
