import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
// import MOCK_DATA from "../mocks/mockResMenu.json";
// 🚨 CHANGE STARTS
let MOCK_DATA = null;
if (process.env.NODE_ENV !== "production") {
  MOCK_DATA = require("../mocks/mockResMenu.json");
}
// 🚨 CHANGE ENDS
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

// global.fetch = jest.fn(() => {
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

it("Should load my restaurant menu component", async () => {
  // await act(async () => {
  //   render(<RestaurantMenu />);

  //   const accordianHeader = screen.findByText("Recommended (15)");
  //   fireEvent.click(accordianHeader);
  // });
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
      </Provider>
    </BrowserRouter>
  );

  const accordianHeader = await screen.findByText("Recommended (15)");
  fireEvent.click(accordianHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(15);

  expect(screen.getByText("🛒Cart (0)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("🛒Cart (1)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText("🛒Cart (2)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(17);
});

it("Should have two items we put inside cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Cart />
      </Provider>
    </BrowserRouter>
  );
  expect(screen.getAllByTestId("foodItems").length).toBe(2);
});

it("Should have 0 items in the cart on the click of the Cear Cart Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Cart />
      </Provider>
    </BrowserRouter>
  );
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.queryAllByTestId("foodItems").length).toBe(0); // Use ths when no element present.

  expect(
    screen.getByText("Cart is empty. Add items to the cart.")
  ).toBeInTheDocument();
});
//In Cart.test.js component.
