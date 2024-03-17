import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import LandingPage from "../LandingPages/LandingPage";
import Register from "../Credentials/Register";
import Login from "../Credentials/Login";
import Home from "../Pages/Home";
import ForgotPassword from "../Pages/ForgotPassword";
import OtpConfirmation from "../Pages/OtpConfirmation";
import ContactUs from "../Pages/ContactUs.jsx";

const HeaderFooterLayout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

const NoHeaderFooterLayout = ({ children }) => <main>{children}</main>;

const MainRouter = () => (
  <Router>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route
        path='/home'
        element={
          <HeaderFooterLayout>
            <Home />
          </HeaderFooterLayout>
        }
      />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/otp-confirmation' element={<OtpConfirmation />} />
      <Route
        path='/contact'
        element={
          <HeaderFooterLayout>
            <ContactUs />
          </HeaderFooterLayout>
        }
      />
    </Routes>
  </Router>
);

export default MainRouter;

// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Register from "../Credentials/Register";
// import Home from "../Home/Home";
// import Login from "../Credentials/Login";
// import LandingPage from "../LandingPages/LandingPage.jsx";
// import ForgotPassword from "../Home/ForgotPassword.jsx";
// import OtpConfirmation from "../Home/OtpConfirmation.jsx";

// const routesData = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <LandingPage />,
//       children: [
//         {
//           path: "/child-home",
//           element: <Home />,
//         },
//       ],
//       //   errorElement: <RouterErrorPage />,
//     },
//     {
//       path: "/register",
//       element: <Register />,
//       //   errorElement: <RouterErrorPage />,
//     },
//     {
//       path: "/login",
//       element: <Login />,
//       //   errorElement: <RouterErrorPage />,
//     },
//     {
//       path: "/home",
//       element: <Home />,
//       // errorElement : <RouterErrorPage />,
//     },
//     {
//       path: "/forgot-password",
//       element: <ForgotPassword />,
//       // errorElement : <RouterErrorPage />,
//     },
//     {
//       path: "/otp-confirmation",
//       element: <OtpConfirmation />,
//       // errorElement : <RouterErrorPage />,
//     },
//   ],

//   {
//     basename: `/`,
//   }
// );

// const MainRouter = ({ children }) => {
//   return (
//     <React.Fragment>
//       <RouterProvider router={routesData}>{children}</RouterProvider>
//     </React.Fragment>
//   );
// };

// export default MainRouter;
