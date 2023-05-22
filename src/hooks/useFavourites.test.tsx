import { renderHook, act } from '@testing-library/react';
import { useFavourites } from './useFavourites';
import { mockJoke, anotherJoke } from '../../__mocks__/joke';

describe('useFavourites', () => {
  beforeEach(() => {
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn(),
      removeItem: jest.fn(),
    };
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('initializes with empty favourites', () => {
    const { result } = renderHook(() => useFavourites());

    expect(result.current.favourites).toEqual([]);
  });

  it('adds a joke to favourites', () => {
    const { result } = renderHook(() => useFavourites());

    act(() => {
      result.current.addToFavourites(mockJoke);
    });

    expect(result.current.favourites).toEqual([mockJoke]);
  });

  it('does not add duplicate jokes to favourites', () => {
    const { result } = renderHook(() => useFavourites());

    act(() => {
      result.current.addToFavourites(mockJoke);
      result.current.addToFavourites(mockJoke);
    });

    expect(result.current.favourites).toEqual([mockJoke]);
  });

  it('removes a joke from favourites', () => {
    const { result } = renderHook(() => useFavourites());

    act(() => {
      result.current.addToFavourites(mockJoke);
      result.current.addToFavourites(anotherJoke);
      result.current.removeFromFavourites(mockJoke);
    });

    expect(result.current.favourites).toEqual([anotherJoke]);
  });

  it('persists favourites in localStorage', () => {
    const { result } = renderHook(() => useFavourites());

    act(() => {
      result.current.addToFavourites(mockJoke);
    });

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'favourites',
      JSON.stringify([mockJoke])
    );
  });
});
