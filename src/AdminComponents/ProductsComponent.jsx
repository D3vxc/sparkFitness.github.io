import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';

function ProductsComponent() {
  // Mock product data
  const products = [
    { id: 1, name: 'Treadmill Pro', category: 'Fitness', price: '$999' },
    { id: 2, name: 'Yoga Mat', category: 'Accessories', price: '$19' },
    { id: 3, name: 'Dumbbell Set', category: 'Weights', price: '$49' },
    { id: 4, name: 'Resistance Bands', category: 'Accessories', price: '$24' },
    // Add more products as needed
  ];

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, p: 6, bgcolor: 'lightpink' }}>
        <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="product">
                  {product.name}
                </TableCell>
                <TableCell align="right">{product.category}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    </React.Fragment>
  );
};

export default ProductsComponent;

