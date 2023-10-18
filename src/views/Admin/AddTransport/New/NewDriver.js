import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router';

const NewDriver = () => {
  const [driverData, setDriverData] = useState({
    driverName: '',
    licenseNumber: '',
    contactNumber: ''
  });

  const handleChange = (e) => {
    setDriverData({ ...driverData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to the server
    console.log('Submitted Driver Data:', driverData);
    // Add logic to send data to the server or perform other actions
    // Reset form data after submission if needed
    setDriverData({
      driverName: '',
      licenseNumber: '',
      contactNumber: ''
    });
    // Navigate back to the previous page
    navigate(-1);
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h5">New Driver Form</Typography>
          <form>
            <TextField
              label="Driver Name"
              name="driverName"
              value={driverData.driverName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="License Number"
              name="licenseNumber"
              value={driverData.licenseNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Contact Number"
              name="contactNumber"
              value={driverData.contactNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
            {/* Back button using useNavigate */}
            <Button variant="outlined" onClick={() => navigate(-1)} style={{ marginLeft: '8px' }}>
              Back
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NewDriver;
