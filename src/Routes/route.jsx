import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import SlideNavbar from '../Components/MUI/SlideNavbar.jsx'
import NavLayout from '../Components/MUI/NavLayout.jsx'

import Home from "../views/Tests/Test.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SlideNavbar AppComponent ={<Home/>} />
    ),
  },
  {
    path: "/about",
    element: <NavLayout AppComponent ={<Home/>} />,
  },
]);

export default router