import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "Namaste React"
// );
// console.log(heading);

const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);

const HeadingComponent = () => {
  return <h1>Namaste React Functional Component</h1>;
};

const Title = () => (
  <h1 className="head" tabIndex="5">
    React Title Component
  </h1>
);

const number = 10000;
const HeadingComponentNested = () => (
  <div id="container">
    <Title /> {/*Rendering Title Componenet inside Heading Component*/}
    <Title></Title>
    {Title()}
    <h2>{number + 200}</h2>
    {jsxHeading}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponentNested />);

// console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
