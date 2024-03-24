import { Box, Typography } from "@mui/material";
import React from "react";

const MainBanner = (props) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')",
          height: "80vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "3rem",
            fontWeight: "bold",
            fontFamily: "poppins",
            textAlign: "center",
          }}
        >
          {props.mainText}
        </Typography>
      </Box>
    </>
  );
};

export default MainBanner;
