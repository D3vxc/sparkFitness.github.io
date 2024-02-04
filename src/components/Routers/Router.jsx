import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "../Credentials/Register";
import Home from "../Home/Home";
import Login from "../Credentials/Login";
import LandingPage from "../LandingPages/LandingPage.jsx";
import ForgotPassword from "../Home/ForgotPassword.jsx";
import OtpConfirmation from "../Home/OtpConfirmation.jsx";

const routesData = createBrowserRouter(
  [
    {
      path: "/",
      element: <LandingPage />,
      //   errorElement: <RouterErrorPage />,
    },
    {
      path: "/register",
      element: <Register />,
      //   errorElement: <RouterErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
      //   errorElement: <RouterErrorPage />,
    },
    {
      path: "/home",
      element: <Home />,
      // errorElement : <RouterErrorPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
      // errorElement : <RouterErrorPage />,
    },
    {
      path: "/otp-confirmation",
      element: <OtpConfirmation />,
      // errorElement : <RouterErrorPage />,
    },
  ],

  {
    basename: `/`,
  }
);

const MainRouter = ({ children }) => {
  return (
    <React.Fragment>
      <RouterProvider router={routesData}>{children}</RouterProvider>
    </React.Fragment>
  );
};

export default MainRouter;
