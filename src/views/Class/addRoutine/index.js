import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Select, MenuItem, TextField, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

export default function Routine() {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['8:00 AM - 9:00 AM', '9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM'];
  const navigate = useNavigate();

  const [routineData, setRoutineData] = useState({
    day: '',
    time: '',
    subject: '',
    teacher: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoutineData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Submitted Routine Data:', routineData);
    // Implement your submission logic here
    alert('Routine added successfully');
    navigate(-1);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Class Routine
      </Typography>
      <Paper style={{ padding: '16px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Day</InputLabel>
              <Select name="day" value={routineData.day} onChange={handleInputChange}>
                {daysOfWeek.map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Time</InputLabel>
              <Select name="time" value={routineData.time} onChange={handleInputChange}>
                {timeSlots.map((time) => (
                  <MenuItem key={time} value={time}>
                    {time}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Subject" name="subject" value={routineData.subject} onChange={handleInputChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Teacher" name="teacher" value={routineData.teacher} onChange={handleInputChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
