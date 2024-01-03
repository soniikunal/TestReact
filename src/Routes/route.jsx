import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import SlideNavbar from '../Components/MUI/SlideNavbar.jsx'
import NavLayout from '../Components/MUI/NavLayout.jsx'

import Home from "../views/Tests/Test.jsx";
import Login from "../views/Authentication/Login.jsx";
import Register from "../views/Authentication/Register.jsx";
import ComponentParent from "../views/ComponentParent.jsx";
import ManageTest from "../views/Admin/ManageTest.jsx"
import TypingTest from "../views/Tests/TypingTest.jsx";
import DeleteConfModal from "../Components/common/DeleteConfModal.jsx";
import TinyMCEEditor from "../Components/common/TinyMCEEditor.jsx";
import PreScreenTest from "../views/Tests/PreScreenTest.jsx";
// import ProtectedRoute from "./ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <NavLayout AppComponent={<Login />} />,
  },
  {
    path: "/register",
    element: <NavLayout AppComponent={<Register />} />,
  },
  {
    path: "/",
    element: (
      <SlideNavbar AppComponent={<Home />} />
    ),
  },
  {
    path: "/dev",
    element: <NavLayout AppComponent={<PreScreenTest />} />,
  },
  {
    path: "/manage-question",
    element: <SlideNavbar AppComponent={<ManageTest />} />,
  },
  {
    path: "/admin",
    element: <SlideNavbar AppComponent={<ComponentParent />} />,
  },
  {
    path: "/typing-test",
    element: <SlideNavbar AppComponent={<TypingTest />} />,
  },
  // {
  //   path: "/login",
  //   element: <ProtectedRoute AppComponent={<NavLayout AppComponent={<Register />} />} />,
  // },
]);

export default router