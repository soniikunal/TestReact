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
import TinyMCEEditor from "../Components/common/TinyMCEEditor.jsx";
import PreScreenTest from "../views/Tests/PreScreenTest.jsx";
import Resume from "../views/Tests/Resume.jsx"
import StartTest from "../views/Tests/StartTest.jsx"
import AtdTest from "../views/Tests/AtdTest.jsx";
import UserResults from "../views/Admin/UserResults.jsx";

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
    path: "/prescreening",
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
  {
    path: "/resume",
    element: <SlideNavbar AppComponent={<Resume />} />,
  },
  {
    path: "/startTest",
    element: <SlideNavbar AppComponent={<StartTest />} />,
  },
  {
    path: "/atdTest",
    element: <SlideNavbar AppComponent={<AtdTest />} />,
  },
  {
    path: "/results",
    element: <SlideNavbar AppComponent={<UserResults/>}/>,
  },
  {
    path: "/dev",
    element: <SlideNavbar AppComponent={<TinyMCEEditor/>}/>,
  },
  // {
  //   path: "/login",
  //   element: <ProtectedRoute AppComponent={<NavLayout AppComponent={<Register />} />} />,
  // },
]);

export default router