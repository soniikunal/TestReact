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
import Resume from "../views/HelperPages/Resume.jsx"
import PreScreeningInstruc from "../views/HelperPages/PreScreeningInstruc.jsx"
import AtdTest from "../views/Tests/AtdTest.jsx";
import UserResults from "../views/Admin/UserResults.jsx";
import ExamLogin from "../views/Authentication/ExamLogin.jsx";
import MBTI from "../views/Tests/MBTI.jsx";
import PersonalityTest from "../views/Tests/PersonalityTest.jsx";
import Completion from "../views/HelperPages/Completion.jsx";
import ATDInstructions from "../views/HelperPages/ATDInstructions.jsx";
import TPInstructions from "../views/HelperPages/TPInstructions.jsx";

import ProtectedRoute from "./ProtectedRoute.jsx";
const adminRoute = '/admin'
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <NavLayout AppComponent={<ExamLogin />} />
    ),
  },
  {
    path: `/resume`,
    element: <NavLayout AppComponent={<Resume />} />,
  },
  {
    path: `/Prescreening`,
    element: <NavLayout AppComponent={<PreScreeningInstruc />} />,
  },
  {
    path: `/PrescreeningTest`,
    element: <NavLayout AppComponent={<PreScreenTest />} />,
  },
  {
    path: `/TypingTest`,
    element: <NavLayout AppComponent={<TPInstructions />} />,
  },
  {
    path: `/Typing-test`,
    element: <NavLayout AppComponent={<TypingTest />} />,
  },
  {
    path: `/ATD`,
    element: <NavLayout AppComponent={<ATDInstructions />} />,
  },
  {
    path: `/ATDTest`,
    element: <NavLayout AppComponent={<AtdTest />} />,
  },
  {
    path: `${adminRoute}/login`,
    element: <NavLayout AppComponent={<Login />} />,
  },
  {
    path: `${adminRoute}/register`,
    element: <NavLayout AppComponent={<Register />} />,
  },
  {
    path: `${adminRoute}/results`,
    element: <ProtectedRoute AppComponent={<SlideNavbar AppComponent={<UserResults />} />} />,
  },
  {
    path: `${adminRoute}/manage-question`,
    element: <ProtectedRoute AppComponent={<SlideNavbar AppComponent={<ManageTest />} />} />,
  },
  {
    path: `${adminRoute}/admin`,
    element: <ProtectedRoute AppComponent={<SlideNavbar AppComponent={<ComponentParent />} />} />,
  },
  {
    path: `/Personality`,
    element: <SlideNavbar AppComponent={<PersonalityTest />} />,
  },
  {
    path: `/MBTI`,
    element: <SlideNavbar AppComponent={<MBTI />} />,
  },
  {
    path: `/Completion`,
    element: <NavLayout AppComponent={<Completion />} />,
  },
  {
    path: '*',
    element: (
        <NavLayout AppComponent={<div>No page found!</div>} />
    ),
  },
  // {
  //   path: `${adminRoute}/dev`,
  //   element: <SlideNavbar AppComponent={<TinyMCEEditor />} />,
  // },
  // {
  //   path: `/login`,
  //   element: <ProtectedRoute AppComponent={<SlideNavbar AppComponent={<Register />} />} />,
  // },
]);

export default router