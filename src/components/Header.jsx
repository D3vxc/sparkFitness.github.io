import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import LogoImage from "../assets/HomePageImages/Logo.svg";
import { useNavigate } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";

function Header() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          background: "#FBFFFE",
          height: "65px",
        }}
      >
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          lg={3}
          xl={3}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            alignContent: "center",
          }}
          onClick={() => navigate("/")}
        >
          <Box
            component='img'
            src={LogoImage}
            sx={{
              mx: "10px",
              //  height: "30px", width: "30px"
            }}
          />

          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "22px",
              fontWeight: 800,
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            Spark Fitness
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>

        <Grid
          item
          xs={1}
          sm={1}
          md={1}
          lg={1}
          xl={1}
          sx={{
            ...NavbarBtn,
          }}
          onClick={() => navigate("/home")}
        >
          <Typography sx={TextStyle}>Home</Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ ...NavbarBtn }}>
          {" "}
          <Typography sx={TextStyle}>About</Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ ...NavbarBtn }}>
          {" "}
          <Typography sx={TextStyle}> Products</Typography>
        </Grid>
        {/* <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ ...NavbarBtn }}>
          {" "}
          <Typography sx={TextStyle}>Schedule</Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ ...NavbarBtn }}>
          {" "}
          <Typography sx={TextStyle}>Diet</Typography>
        </Grid> */}
        <Grid
          item
          xs={1}
          sm={1}
          md={1}
          lg={1}
          xl={1}
          sx={{ ...NavbarBtn }}
          onClick={() => navigate("/contact")}
        >
          {" "}
          <Typography sx={TextStyle}>Contact</Typography>
        </Grid>

        <Grid
          item
          xs={2}
          sm={2}
          md={2}
          lg={2}
          xl={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            cursor: "pointer",
          }}
          onClick={() => navigate("/login")}
        >
          <Typography sx={TextStyleForLogin}> Login</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Header;

const NavbarBtn = {
  // padding: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: 600,
  letterSpacing: "0em",
  textAlign: "left",
};

const TextStyle = {
  fontFamily: "Poppins",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: 600,
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    fontSize: "20px",
    transition: "0.5s",
    background: "#E3E3E3",
    display: "flex",
    flexWrap: "wrap",
  },
};

const TextStyleForLogin = {
  fontFamily: "Poppins",
  cursor: "pointer",
  fontSize: "22px",
  fontWeight: 600,
};
