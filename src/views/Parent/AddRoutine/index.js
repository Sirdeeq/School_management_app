import React, { useState } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ParentRoutine() {
  const [eventData, setEventData] = useState({
    eventName: '',
    date: '',
    time: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event Data:', eventData);
    // You can add logic here to send the data to your API or perform other actions
    navigate('/parent');
  };

  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h5" gutterBottom>
              Parent Event Details
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField label="Event Name" name="eventName" fullWidth value={eventData.eventName} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Date" type="date" name="date" fullWidth value={eventData.date} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Time" type="time" name="time" fullWidth value={eventData.time} onChange={handleInputChange} />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    name="description"
                    multiline
                    fullWidth
                    rows={4}
                    value={eventData.description}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
