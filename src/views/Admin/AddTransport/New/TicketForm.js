import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Card, CardContent, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router';

const TicketForm = ({ routes }) => {
  const [ticketData, setTicketData] = useState({
    studentName: '',
    route: '',
    departureTime: '',
    arrivalTime: ''
  });

  const handleChange = (e) => {
    setTicketData({ ...ticketData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to the server
    console.log('Submitted Ticket Data:', ticketData);
    navigate(-1);
    // Add logic to send data to the server or perform other actions
    // Reset form data after submission if needed
    setTicketData({
      studentName: '',
      route: '',
      departureTime: '',
      arrivalTime: ''
    });
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h5">Bus Ticket Form</Typography>
          <form>
            <TextField
              label="Student Name"
              name="studentName"
              value={ticketData.studentName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField 
              select 
              label="Route" 
              name="route" 
              value={ticketData.route} 
              onChange={handleChange} 
              fullWidth 
              margin="normal"
            >
              {routes.map((route) => (
                <MenuItem key={route.routeName} value={route.routeName}>
                  {route.routeName}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Departure Time"
              name="departureTime"
              value={ticketData.departureTime}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Arrival Time"
              name="arrivalTime"
              value={ticketData.arrivalTime}
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

export default TicketForm;
