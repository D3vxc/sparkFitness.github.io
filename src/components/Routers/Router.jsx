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
import AddProduct from "../../AdminComponents/AddProduct.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx"; // Ensure this component is implemented correctly for authentication
import AdminDashboard from "../../AdminComponents/AdminDashboard.jsx";

const HeaderFooterLayout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

const AdminLayout = () => {
  return (
    <div>
      <AdminDashboard />
      {/* <Outlet /> This renders the nested route */}
    </div>
  );
};

const MainRouter = () => (
  <Router>
    <Routes>
      <Route
        path='/'
        element={
          <HeaderFooterLayout>
            <Home />
          </HeaderFooterLayout>
        }
      />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/otp-confirmation' element={<OtpConfirmation />} />
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

      {/* Protected routes for admin */}
      <Route element={<ProtectedRoute />}>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />{" "}
          {/* Admin Dashboard as the default child */}
          <Route path='addProduct' element={<AddProduct />} />
          {/* More admin routes can be nested here */}
        </Route>
      </Route>
    </Routes>
  </Router>
);

export default MainRouter;
