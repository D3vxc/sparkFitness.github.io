import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LogoImage from "../assets/HomePageImages/Logo.svg";

function Footer() {
  return (
    <React.Fragment>
      <Box
        sx={{
          background: "#1C2229",
          height: "200px",
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          <Grid
            item
            xs={4.5}
            sm={4.5}
            md={4.5}
            lg={4.5}
            xl={4.5}
            sx={{ background: "", p: 5 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  component='img'
                  src={LogoImage}
                  sx={
                    {
                      //  height: "30px", width: "30px"
                    }
                  }
                />{" "}
                <Typography
                  sx={{
                    mx: "10px",
                    color: "#FBFFFE",
                    fontFamily: "Inter",
                    fontSize: "22px",
                    fontWeight: 800,
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  Spark Fitness
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: "16px",
                  color: "#FBFFFE",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem, esse aperiam error?
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            sx={{ background: "green" }}
          >
            <Typography sx={UtilityPagesMainText}>Utility Pages</Typography>
            <Box>
              <Typography sx={UtilityPagesSubText}>Privacy Policy</Typography>
              <Typography sx={UtilityPagesSubText}>Terms of Service</Typography>
              <Typography sx={UtilityPagesSubText}>Cookie Policy</Typography>
            </Box>
          </Grid>
          <Grid item xs={4.5} sm={4.5} md={4.5} lg={4.5} xl={4.5}></Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Footer;

const UtilityPagesMainText = {
  fontFamily: "poppins",
  fontSize: 25,
  fontWeight: 700,
  letterSpacing: "0em",
  textAlign: "left",
};

const UtilityPagesSubText = {
  fontFamily: "poppins",
  fontSize: 20,
  fontWeight: 500,
  letterSpacing: "0em",
  textAlign: "left",
};
