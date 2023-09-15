import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../Home/Home';

const routesData = createBrowserRouter(
  [
    {
      path: '/',
      element: <Login />,
      //   errorElement: <RouterErrorPage />,
    },
    {
      path: '/login',
      element: <Login />,
      //   errorElement: <RouterErrorPage />,
    },
    {
      path: '/home',
      element: <Home />,
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
