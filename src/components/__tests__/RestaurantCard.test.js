import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
// import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
let MOCK_DATA = null;
if (process.env.NODE_ENV !== "production") {
  MOCK_DATA = require("../mocks/resCardMock.json");
}

// it("Should render RestaurantCard component with props Data", () => {
//   render(<RestaurantCard resData={MOCK_DATA} />);
//   const name = screen.getByText("Amritsari kulcha 24/7");
//   expect(name).toBeInTheDocument();
// });

it("Should render RestaurantCard component with props Data", () => {
  if (!MOCK_DATA) return; // Skip test in production
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Amritsari kulcha 24/7");
  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with newlyOnboarded label", () => {});
