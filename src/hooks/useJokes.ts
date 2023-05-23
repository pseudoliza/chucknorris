import {useEffect, useState} from "react";
import axios from "axios";
import {MAIN_HOST} from "../constants/endpoints";

export interface JokeItem {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export const useJokes = (): {jokes: JokeItem[]} => {
  const [jokes, setJokes] = useState<JokeItem[]>([]);

  const fetchJokes = async (): Promise<void> => {
    try {
      const response = await axios.get(MAIN_HOST);
      const joke = response.data;
      console.log(joke);
      setJokes(prevJokes => [joke, ...prevJokes.slice(0, 9)]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch the initial 10 jokes
    for (let i = 0; i < 10; i++) {
      fetchJokes().catch(console.error);
    }

    // Fetch a new joke every 5 seconds
    const interval = setInterval(() => {
      fetchJokes().catch(console.error);
    }, 5000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return {jokes};
};
