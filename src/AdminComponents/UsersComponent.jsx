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
const {
    data: getAllUsers,
    isLoading: getusersLoading,
    refetch: refetchUsers,
  } = useFetchAllUsers();

  console.log("getAllUsers", getAllUsers);

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
