import React from "react";
import {render} from "@testing-library/react";
import App from "./App";

jest.mock("./pages/Home/Home.tsx", () => {
  const ComponentToMock: React.FC = () => <div />;
  return ComponentToMock;
});

jest.mock("./pages/Favourites/Favourites.tsx", () => {
  const ComponentToMock: React.FC = () => <div />;
  return ComponentToMock;
});

beforeAll(() => {
  const root = document.createElement("div");
  root.id = "root";
  document.body.appendChild(root);
});

test("renders without crashing", () => {
  render(<App />);
});
