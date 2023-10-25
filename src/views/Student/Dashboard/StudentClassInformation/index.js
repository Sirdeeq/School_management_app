import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Card,
  CardHeader,
  CardContent
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Dummy class information data with added 'id' property
const classInformationData = [
  { id: 1, className: 'Class A', teacher: 'Mr. Smith', room: 'Room 101', subject: 'Math', time: '9:00 AM - 10:30 AM' },
  { id: 2, className: 'Class B', teacher: 'Mrs. Johnson', room: 'Room 102', subject: 'Science', time: '11:00 AM - 12:30 PM' }
];

const ClassInformationTable = ({ onRowClick }) => {
  return (
    <Card>
      <CardHeader title={<Typography variant="h5">Class Information</Typography>} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Class Name</TableCell>
              <TableCell>Teacher</TableCell>
              <TableCell>Room</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {classInformationData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.className}</TableCell>
                <TableCell>{row.teacher}</TableCell>
                <TableCell>{row.room}</TableCell>
                <TableCell>
                  <IconButton onClick={() => onRowClick(row)}>
                    <ArrowBackIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

const StudentClassInformation = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  const handleBackClick = () => {
    setSelectedRow(null);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {selectedRow ? (
          // Display detailed information in a card when a row is clicked
          <Card>
            <CardHeader
              title={<Typography variant="h5">{selectedRow.className}</Typography>}
              action={
                <IconButton onClick={handleBackClick}>
                  <ArrowBackIcon />
                </IconButton>
              }
            />
            <CardContent>
              <Typography>Teacher: {selectedRow.teacher}</Typography>
              <Typography>Room: {selectedRow.room}</Typography>
              <Typography>Subject: {selectedRow.subject}</Typography>
              <Typography>Time: {selectedRow.time}</Typography>
            </CardContent>
          </Card>
        ) : (
          // Display the class information table
          <ClassInformationTable onRowClick={handleRowClick} />
        )}
      </Grid>
    </Grid>
  );
};

export default StudentClassInformation;
