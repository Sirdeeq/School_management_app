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
import VisibilityIcon from '@mui/icons-material/Visibility';

// Dummy subject information data with added 'id' property
const subjectInformationData = [
  { id: 1, subjectName: 'Math', teacher: 'Mr. Smith', room: 'Room 101', time: '9:00 AM - 10:30 AM' },
  { id: 2, subjectName: 'Science', teacher: 'Mrs. Johnson', room: 'Room 102', time: '11:00 AM - 12:30 PM' },
  { id: 3, subjectName: 'English', teacher: 'Mr. Davis', room: 'Room 103', time: '1:00 PM - 2:30 PM' }
  // Add more subject information data as needed
];

const SubjectInformationTable = ({ onRowClick }) => {
  return (
    <Card>
      <CardHeader title={<Typography variant="h5">Subject Information</Typography>} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Subject Name</TableCell>
              <TableCell>Teacher</TableCell>
              <TableCell>Room</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subjectInformationData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.subjectName}</TableCell>
                <TableCell>{row.teacher}</TableCell>
                <TableCell>{row.room}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>
                  <IconButton onClick={() => onRowClick(row)}>
                    <VisibilityIcon />
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

const StudentSubjectInformation = () => {
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
          <Card>
            <CardHeader
              title={<Typography variant="h5">{selectedRow.subjectName}</Typography>}
              action={
                <IconButton onClick={handleBackClick}>
                  <ArrowBackIcon />
                </IconButton>
              }
            />
            <CardContent>
              <Typography>Teacher: {selectedRow.teacher}</Typography>
              <Typography>Room: {selectedRow.room}</Typography>
              <Typography>Time: {selectedRow.time}</Typography>
            </CardContent>
          </Card>
        ) : (
          <SubjectInformationTable onRowClick={handleRowClick} />
        )}
      </Grid>
    </Grid>
  );
};

export default StudentSubjectInformation;
