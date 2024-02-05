import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import LogoImage from "../assets/HomePageImages/Logo.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          background: "red",
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
        >
          <Box component='img' src={LogoImage} sx={{ mx: "10px" }} />
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            Spark Fitness
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>

        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ ...NavbarBtn }}>
          <Typography>Home</Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ ...NavbarBtn }}>
          {" "}
          <Typography>About</Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ ...NavbarBtn }}>
          {" "}
          <Typography>Trainers</Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ ...NavbarBtn }}>
          {" "}
          <Typography>Schedule</Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ ...NavbarBtn }}>
          {" "}
          <Typography>Diet</Typography>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} sx={{ ...NavbarBtn }}>
          {" "}
          <Typography>Contact</Typography>
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
          <Typography> Login</Typography>
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
  fontSize: 20,
  fontWeight: 600,
  letterSpacing: "0em",
  textAlign: "left",
};
