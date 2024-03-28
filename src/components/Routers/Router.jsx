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
import About from "../Pages/About.jsx";
import Classes from "../Pages/Classes.jsx";
import Products from "../Pages/Products.jsx";
// import { getToken } from "../../utils/token.js";
import AddProduct from "../../AdminComponents/AddProduct.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx"; // Adjust the import path as necessary

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
      {/* <Route path='/' element={<Home />} /> */}
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/addProduct' element={<AddProduct />} />
      <Route
        path='/'
        element={
          <HeaderFooterLayout>
            <Home />
          </HeaderFooterLayout>
        }
      />
      <Route
        path='/about'
        element={
          <HeaderFooterLayout>
            <About />
          </HeaderFooterLayout>
        }
      />
      <Route
        path='/contactus'
        element={
          <HeaderFooterLayout>
            <ContactUs />
          </HeaderFooterLayout>
        }
      />
      <Route
        path='/classes'
        element={
          <HeaderFooterLayout>
            <Classes />
          </HeaderFooterLayout>
        }
      />
      <Route
        path='/products'
        element={
          <HeaderFooterLayout>
            <Products />
          </HeaderFooterLayout>
        }
      />
      <Route element={<ProtectedRoute />}>
        {/* Now AddProduct is a child route of ProtectedRoute */}
        <Route path='/addProduct' element={<AddProduct />} />
      </Route>
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
