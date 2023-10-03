import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useNavigate } from 'react-router';

export default function AddSubject() {
  const navigate = useNavigate();
  const [subjectData, setSubjectData] = useState({
    subjectName: '',
    textbooks: '',
    teacherAssigned: '',
    classUsage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubjectData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Submitted Data:', subjectData);
    setTimeout(() => {
      console.log('Submission Successful!');
      navigate('/class');
    }, 1000);
  };

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Add New Subject
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Subject Name" name="subjectName" value={subjectData.subjectName} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Textbooks" name="textbooks" value={subjectData.textbooks} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="teacher-assigned-label">Teacher Assigned</InputLabel>
            <Select
              labelId="teacher-assigned-label"
              id="teacher-assigned"
              name="teacherAssigned"
              value={subjectData.teacherAssigned}
              onChange={handleChange}
            >
              <MenuItem value="teacher1">Teacher 1</MenuItem>
              <MenuItem value="teacher2">Teacher 2</MenuItem>
              {/* Add more teachers as needed */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="class-usage-label">Class Usage</InputLabel>
            <Select labelId="class-usage-label" id="class-usage" name="classUsage" value={subjectData.classUsage} onChange={handleChange}>
              <MenuItem value="class1">Class 1</MenuItem>
              <MenuItem value="class2">Class 2</MenuItem>
              {/* Add more classes as needed */}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <br />
      <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </div>
  );
}
