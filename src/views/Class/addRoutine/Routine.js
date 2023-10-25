import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, IconButton, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ViewRoutine from './ViewRoutine';
import { useNavigate } from 'react-router';
import { Add as AddIcon } from '@mui/icons-material';


const dummyData = [
  { id: 1, name: 'Math Class', type: 'Class', time: '9:00 AM' },
  { id: 2, name: 'Science Lab', type: 'Lab', time: '10:30 AM' }
  // Add more dummy data as needed
];

export default function Routine() {
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [viewingRoutine, setViewingRoutine] = useState(false);

  const handleView = (routine) => {
    setSelectedRoutine(routine);
    setViewingRoutine(true);
  };

  const handleDelete = () => {
    // const updatedData = dummyData.filter((routine) => routine.id !== id);
    // Update your state or API call to reflect the deletion
    // setDummyData(updatedData);
  };

  const handleBack = () => {
    setViewingRoutine(false);
  };
  const navigate = useNavigate();

  return (
    <Paper elevation={3} style={{ margin: '20px', padding: '20px' }}>
      <Box mb={2}>
        <Button onClick={() => navigate('/classRoutine')} startIcon={<AddIcon />} variant="outlined" color="primary">
          New Routine
        </Button>
      </Box>
      {!viewingRoutine ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Routine Name</TableCell>
              <TableCell>Routine Type</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleView(row)}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(row.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <ViewRoutine routine={selectedRoutine} />
      )}
      {viewingRoutine && (
        <Button variant="contained" onClick={handleBack} style={{ marginTop: 10 }}>
          Back to list
        </Button>
      )}
    </Paper>
  );
}
