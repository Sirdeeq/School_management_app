import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Grid, IconButton, Paper, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Add as AddIcon, Visibility as VisibilityIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { gridSpacing } from 'config.js';
import ThumbUpAltTwoTone from '@mui/icons-material/ThumbUpAltTwoTone';
import ReportCard from 'views/Dashboard/ReportCard';

function Parent() {
  const parents = [
    { id: 1, name: 'Parent 1', age: 40, occupation: 'Engineer' },
    { id: 2, name: 'Parent 2', age: 35, occupation: 'Doctor' },
    { id: 3, name: 'Parent 3', age: 45, occupation: 'Teacher' }
    // Add more parent information as needed
  ];

  const theme = useTheme();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    // Implement your delete logic here
    console.log(`Deleting parent with ID: ${id}`);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Box mb={2}>
          <Button onClick={() => navigate('/parentRoutine')} startIcon={<AddIcon />} variant="outlined" color="primary">
            New Routine
          </Button>
        </Box>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard primary="30" secondary="All Activities" color={theme.palette.primary.main} iconPrimary={ThumbUpAltTwoTone} />
          </Grid>
        </Grid>
        {/* Grid for Parents */}
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Occupation</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {parents.map((parent) => (
                  <TableRow key={parent.id}>
                    <TableCell>{parent.name}</TableCell>
                    <TableCell>{parent.age}</TableCell>
                    <TableCell>{parent.occupation}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        startIcon={<VisibilityIcon />}
                        onClick={() => {
                          // Implement your view action here
                        }}
                        style={{ marginRight: '8px' }}
                      >
                        View
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<EditIcon />}
                        onClick={() => {
                          // Implement your edit action here
                        }}
                        style={{ marginRight: '8px' }}
                      >
                        Edit
                      </Button>
                      <IconButton color="error" onClick={() => handleDelete(parent.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default Parent;
