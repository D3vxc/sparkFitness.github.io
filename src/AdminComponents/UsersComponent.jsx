import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Box,
} from "@mui/material";
import { useFetchAllUsers } from "../components/Hooks/GetAllUsers";

function UsersComponent() {
  // if (loading) {
  //   return (
  //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  //       <CircularProgress />
  //     </div>
  //   );
  // }

  // Mock user data

  const {
    data: getAllUsers,
    isLoading: getusersLoading,
    refetch: refetchUsers,
  } = useFetchAllUsers();

  console.log("getAllUsers", getAllUsers);

  // const users = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     email: "john123@gmail.com",
  //     phoneNumber: "6325410954",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Doe",
  //     email: "jane123@gmail.com",
  //     phoneNumber: "9425410953",
  //   },
  //   {
  //     id: 3,
  //     name: "Alice",
  //     email: "alice123@gmail.com",
  //     phoneNumber: "6525410952",
  //   },
  //   {
  //     id: 4,
  //     name: "Bob",
  //     email: "bob123@gmail.com",
  //     phoneNumber: "9225410951",
  //   },
  //   // Add more users as needed
  // ];

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, p: 6, bgcolor: "lightpink", height: "100vh" }}>
        <Typography variant='h4' component='div'>
          User Management
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align='right'>Name</TableCell>
                <TableCell align='right'>Email</TableCell>
                <TableCell align='right'>Phone Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getAllUsers?.map((data) => (
                <TableRow
                  key={data?._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {data?._id}
                  </TableCell>
                  <TableCell align='right'>{data?.name}</TableCell>
                  <TableCell align='right'>{data?.email}</TableCell>
                  <TableCell align='right'>{data?.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </React.Fragment>
  );
}

export default UsersComponent;
