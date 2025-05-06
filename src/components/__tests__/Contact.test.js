import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  beforeAll(() => {
    console.log("Before All");
  });
  beforeEach(() => {
    console.log("Before Each");
  });
  afterAll(() => {
    console.log("After All");
  });
  afterEach(() => {
    console.log("After each");
  });
  test("Should load contact us component", () => {
    render(<Contact />);
    // Querying
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact Us component", () => {
    render(<Contact />);
    //   const button = screen.getByRole("button");
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });
  test("Should load inpout field 'name' inside Contact Us component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });
  it("Should load 2 input boxes on the Contact Us component", () => {
    render(<Contact />);
    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //   console.log(inputBoxes);

    // Assertion
    expect(inputBoxes.length).toBe(2);
    //   expect(inputBoxes.length).not.toBe(3);
  });
});
