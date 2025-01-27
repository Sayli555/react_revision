import React from "react";
import ReactDOM from "react-dom/client";
import { restData } from "../data.js";
import Header from "./components/Header.jsx";
import Restaurent from "./components/RestaurentCard.jsx";
import AppBody from "./components/AppBody.jsx";

// A) html through react
// <div id="parent">
//     <div id="child">
//        <h1>React cource</h1>
//     </div>
// </div>

// ====>

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "React cource")
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("parent", parent);
// root.render(parent);

// B)<div id="parent">
// <div id="child1">
//     <h1>Heading 1</h1>
//     <h1>Heading 2</h1>
// </div>
// <div id="child2">
//     <h1>Heading 1</h1>
//     <h1>Heading 2</h1>
// </div>
// </div>

// ==>

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "parent" }, [
    React.createElement("h1", {}, "heading1"),
    React.createElement("h1", {}, "heading2"),
  ]),
  React.createElement("div", { id: "parent" }, [
    React.createElement("h1", {}, "heading1"),
    React.createElement("h1", {}, "heading2"),
  ]),
]);





const AppLayout = () => (
  <div>
    <Header />
    <AppBody />
  </div>
);

// const heading = React.createElement("h1", {}, "Revison of react");

// const Headinding = <h1>Revison start</h1>;

const root = ReactDOM.createRoot(document.querySelector("body"));
root.render(<AppLayout />);
