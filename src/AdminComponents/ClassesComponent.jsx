import {
  Typography,
  Box,
  Grid,
} from "@mui/material";
import React from "react";
import { useFetchAllClasses } from "../components/Hooks/getAllClasses";

function ClassesComponent() {
  const {
    data: getAllClasses,
    isLoading: getclassesLoading,
    refetch: refetchClasses,
  } = useFetchAllClasses();

  console.log("getAllClasses", getAllClasses);

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, p: 6, bgcolor: "#FBFFFE", height: "100vh" }}>
        <Typography variant="h4" component="div">
          Class Schedule
        </Typography>

        <Grid
          container
          sx={{
            height: "100%",
            maxHeight: "600px",
            overflow: "scroll",
            
          }}
        >
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              bgcolor: "#F3F3F3",
              borderBottom: "1px solid #E9EEF3",
              padding : "20px"
            }}
          >
            <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
              Sr. No.
            </Grid>
            <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
              Name
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              Description
            </Grid>
            <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
              image
            </Grid>
            <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
              trainer
            </Grid>
            <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
              duration
            </Grid>
            <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
              date & time
            </Grid>
          </Grid>

          {getAllClasses?.map((x, i ) => {
            return (
              <Grid
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                sx={{
                  display: "flex",
                  background: "#F3F3F3",
                  borderBottom: "1px solid #E9EEF3",
              padding : "20px"

                }}
              >
                <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                  {/* //i want seriel number here */}
                  {i + 1 }
                </Grid>
                <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
                  {x?.name}
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                  {x?.description}
                </Grid>
                <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
                 
                 <Box component="img" 
                  src={x?.image}
                  sx={{
                    height: "50px",
                    width: "50px",
                    border: "1px solid #000",
                    borderRadius: "50px",
                  }}
                 />
                 
                </Grid>
                <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
                  {x?.trainer}
                </Grid>
                <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                  {x?.duration}
                </Grid>
                <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                  {x?.date}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default ClassesComponent;
