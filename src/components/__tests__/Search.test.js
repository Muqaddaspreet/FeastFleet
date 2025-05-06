import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
// import MOCK_DATA from "../mocks/mockResListData.json";
let MOCK_DATA = null;
if (process.env.NODE_ENV !== "production") {
  MOCK_DATA = require("../mocks/mockResListData.json");
}
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// global.fetch = jest.fn(() => {
//   // You’re telling Jest: “When fetch is called, it should run the function inside here.”
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(MOCK_DATA);
//     },
//   });
// });

if (MOCK_DATA) {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });
}

it("should render the body component with search button and Search res List for 'burger' text input ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  // Assertion:
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);

  const searchbtn = screen.getByRole("button", { name: "Search" });
  expect(searchbtn).toBeInTheDocument();
  //   console.log(searchbtn);
  const searchInput = screen.getByTestId("searchInput");
  //   console.log(searchInput);
  fireEvent.change(searchInput, { target: { value: "burger" } });
  // Fiing a click event for the search button:
  fireEvent.click(searchbtn);
  // screen should load 1 card only
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated restaurants",
  });
  expect(topRatedButton).toBeInTheDocument();

  fireEvent.click(topRatedButton);
  const cardsTopRated = screen.getAllByTestId("resCard");
  expect(cardsTopRated.length).toBe(8);
});
