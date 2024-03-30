import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Box } from '@mui/material';

function UsersComponent() {
  // if (loading) {
  //   return (
  //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  //       <CircularProgress />
  //     </div>
  //   );
  // }

   // Mock user data
   const users = [
    { id: 1, name: 'John Doe', email: 'john123@gmail.com', phoneNumber: '6325410954' },
    { id: 2, name: 'Jane Doe', email: 'jane123@gmail.com', phoneNumber: '9425410953' },
    { id: 3, name: 'Alice', email: 'alice123@gmail.com', phoneNumber: '6525410952' },
    { id: 4, name: 'Bob', email: 'bob123@gmail.com', phoneNumber: '9225410951' },
    // Add more users as needed
  ];

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, p: 6, bgcolor: 'lightpink' }}>
      <Typography variant="h4" component="div">
        User Management
      </Typography>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.phoneNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </React.Fragment>
  );
};

export default UsersComponent;
