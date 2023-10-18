import React from 'react';
import { Container, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

const Vehicles = () => {
  // You can fetch vehicle data from an API or manage it in local state
  const vehicles = [
    { id: 1, name: 'School Bus 1', capacity: 30 },
    { id: 2, name: 'School Bus 2', capacity: 25 }
    // Add more vehicles
  ];

  const handleView = (vehicleId) => {
    // Handle view action for the selected vehicle (e.g., navigate to a detailed view)
    console.log(`Viewing details for Vehicle ID: ${vehicleId}`);
  };

  return (
    <Container>
      <Typography variant="h5">Available Vehicles</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Vehicle Name</TableCell>
              <TableCell>Capacity</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicles.map((vehicle) => (
              <TableRow key={vehicle.id}>
                <TableCell>{vehicle.id}</TableCell>
                <TableCell>{vehicle.name}</TableCell>
                <TableCell>{vehicle.capacity}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => handleView(vehicle.id)}>
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Vehicles;
