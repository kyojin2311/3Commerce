import "./App.css";
import MainHeader from "./components/headers/header";
import { useState } from "react";
import Home from "./components/mainpage/MainPage";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout";
import CheckOutPage from "./components/checkout/CheckOut";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
