import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useFetchAllClasses } from "../Hooks/getAllClasses";
import Cookies from "js-cookie";

function Classes() {
  const {
    data: allClasses,
    isLoading: classesLoading,
    refetch: refetchClasses,
  } = useFetchAllClasses();

  function truncateWithEllipsis(text, maxLength) {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  }
  useEffect(() => {
    //   const navigate = useNavigate();
    const userToken = Cookies.get("token");
    if (!userToken) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <React.Fragment>
      <Grid
        container
        spacing={2} // This adds space between the grid items
        sx={{
          padding: "20px", // Adjust padding as necessary
        }}
      >
        {allClasses?.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={4} // xs=full width on extra small screens, sm=1/3 width on small and larger screens
            key={item.id || index}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                width: "80%",
              }}
            >
              <Box
                component='img'
                src={item?.image}
                sx={{ height: "320px", width: "100%", objectFit: "cover" }}
              />
              <Typography
                sx={{
                  fontFamily: "poppins",
                  color: "#000",
                  fontSize: "24px",
                  fontWeight: 700,
                }}
              >
                {item?.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  color: "#000",
                  fontSize: "16px",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                {truncateWithEllipsis(item?.description, 170)}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default Classes;
