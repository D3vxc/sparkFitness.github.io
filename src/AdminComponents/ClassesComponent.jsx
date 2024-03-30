import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import React from 'react';

// Sample classes data
const mockClasses = [
  { id: 1, title: 'Yoga for Beginners', instructor: 'Sarah', schedule: 'Mon, Wed, Fri - 7 AM' },
  { id: 2, title: 'Advanced Pilates', instructor: 'John', schedule: 'Tue, Thu - 6 PM' },
  { id: 3, title: 'Cardio Kickboxing', instructor: 'Dave', schedule: 'Mon, Wed, Fri - 6 PM' },
  { id: 4, title: 'Strength Training', instructor: 'Alex', schedule: 'Tue, Thu - 7 AM' },
  // Add more classes as needed
];

const ClassesComponent = () => {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, p: 6, bgcolor: 'lightpink' }}>
      <Typography variant="h4" component="div">
        Class Schedule
      </Typography>
    <TableContainer component={Paper}>
      <Table aria-label="classes schedule">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Instructor</TableCell>
            <TableCell>Schedule</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockClasses.map((classInfo) => (
            <TableRow
              key={classInfo.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {classInfo.id}
              </TableCell>
              <TableCell>{classInfo.title}</TableCell>
              <TableCell>{classInfo.instructor}</TableCell>
              <TableCell>{classInfo.schedule}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </React.Fragment>
  );
};

export default ClassesComponent;

