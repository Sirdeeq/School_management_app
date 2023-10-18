import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router';

const NewBus = () => {
  const [busData, setBusData] = useState({
    busName: '',
    capacity: '',
    driverName: '',
    licensePlate: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBusData({ ...busData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to the server
    console.log('Submitted Bus Data:', busData);
    navigate(-1)
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h5">New Bus Form</Typography>
          <form>
            <TextField
              label="Bus Name"
              name="busName"
              value={busData.busName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Capacity"
              name="capacity"
              value={busData.capacity}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Driver Name"
              name="driverName"
              value={busData.driverName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="License Plate"
              name="licensePlate"
              value={busData.licensePlate}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NewBus;
