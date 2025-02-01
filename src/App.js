import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { restData } from "../data.js";
import Header from "./components/Header.jsx";
import Restaurent from "./components/RestaurentCard.jsx";
import AppBody from "./components/AppBody.jsx";
import Shimmer from "./components/Shimmer/Shimmer.jsx";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router"
import About from "./components/About.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Cart from "./components/Cart.jsx";

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
    <Outlet />
  </div>
);

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <h1>Error</h1>,
    children:[
      {
        path:"/",
        element:<AppBody/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact-us",
        element:<ContactUs/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
    ]
  },
]);

// const heading = React.createElement("h1", {}, "Revison of react");

// const Headinding = <h1>Revison start</h1>;

const root = ReactDOM.createRoot(document.querySelector("body"));
root.render(<RouterProvider router={appRoute} />);
