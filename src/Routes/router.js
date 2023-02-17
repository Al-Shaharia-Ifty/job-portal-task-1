import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/signIn", element: <Login /> },
      { path: "/signUp", element: <SignUp /> },
    ],
  },
]);
