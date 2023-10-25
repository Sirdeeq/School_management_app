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
  Card,
  CardHeader,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const StudentClassRoutine = () => {
  // Dummy class routine data with added 'id' property
  const classRoutineData = [
    { id: 1, day: 'Monday', time: '9:00 AM - 10:30 AM', subject: 'Math' },
    { id: 2, day: 'Tuesday', time: '11:00 AM - 12:30 PM', subject: 'Science' }
    // Add more class routine data as needed
  ];

  // State for controlling the dialog
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRoutine, setSelectedRoutine] = useState(null);

  // Function to handle opening the dialog and setting the selected routine
  const handleOpenDialog = (routine) => {
    setSelectedRoutine(routine);
    setOpenDialog(true);
  };

  // Function to handle closing the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title={<Typography variant="h5">Class Routine</Typography>}
          />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Subject</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {classRoutineData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.subject}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleOpenDialog(row)}>
                        <VisibilityIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>
      {/* Dialog for detailed routine information */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Class Routine Details</DialogTitle>
        <DialogContent>
          {selectedRoutine && (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Day</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Subject</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{selectedRoutine.day}</TableCell>
                    <TableCell>{selectedRoutine.time}</TableCell>
                    <TableCell>{selectedRoutine.subject}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default StudentClassRoutine;
