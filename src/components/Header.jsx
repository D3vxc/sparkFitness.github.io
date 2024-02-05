import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LogoImage from "../assets/HomePageImages/Logo.svg";
function Header() {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item> 
          <Box component="img" src={LogoImage} sx={{
          }} />
            <Typography>Spark Fitness</Typography>
        </Grid>



        <Grid item>
          <Typography sx={{...NavbarBtn}}>Home</Typography>
          <Typography sx={{...NavbarBtn}}>About</Typography>
          <Typography sx={{...NavbarBtn}}>Trainers</Typography>
          <Typography sx={{...NavbarBtn}}>Contact</Typography>
         
        </Grid>
          
      </Grid>
    </React.Fragment>
  );
}

export default Header;

const NavbarBtn = {
  padding: "10px",
  background : "blue",
  
}
