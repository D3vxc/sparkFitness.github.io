import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header.jsx";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Header />

      <h1>Welcome to the Landing Page</h1>

      <Box
        component='butotn'
        variant='contained'
        onClick={() => navigate("/register")}
      >
        register here
      </Box>

      <Footer />
    </React.Fragment>
  );
}

export default LandingPage;
