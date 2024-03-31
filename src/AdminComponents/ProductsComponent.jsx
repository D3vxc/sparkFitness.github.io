import React from "react";
import {
  Typography,
 Grid,
  Box,
} from "@mui/material";
import { useFetchAllProduct } from "../components/Hooks/getAllproduct";

function ProductsComponent() {
  const {
    data: getAllProduct,
    isLoading: getproductLoading,
    refetch: refetchProduct,
  } = useFetchAllProduct();

  console.log("getAllProduct", getAllProduct);
  

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, p: 6, bgcolor: "lightpink", height: "100vh" }}>
        <Typography variant='h4' gutterBottom>
          Products
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
              bgcolor: "lightblue",
            }}
          >
            <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
              ID
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
              Name
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
              Description
            </Grid>
            <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
              price
            </Grid>
           </Grid>
           {getAllProduct?.map((data) => {
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
                  bgcolor: "lightslategray",
                }}
              >
                <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                  {/* //i want seriel number here */}
                  {data?._id }
                </Grid>
                <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
                  {data?.name}
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
                  {data?.description}
                </Grid>
                <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
                  {data?.price}
                </Grid>
                </Grid>
            );
          })}
        </Grid>
         </Box>
    </React.Fragment>
  );
}

export default ProductsComponent;
