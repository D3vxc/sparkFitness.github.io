import { Box } from "@mui/material";
import React from "react";

function Header() {
  return (
    <React.Fragment>
      <Box
        sx={{
          height: "70px",
          background: "red",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // Additional background styles
          width: "100%",
          "--color": "rgba(114, 114, 114, 0.3)",
          backgroundColor: "#191a1a",
          backgroundImage:
            "linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent), linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent)",
          backgroundSize: "55px 55px",
        }}
      >
        <Box component='img' src='' alt='logo' />

        <Box>
          <Box component='button' sx={{ color: "white" }}>
            Login
          </Box>
          <Box component='button' sx={{ color: "white" }}>
            Register
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Header;
