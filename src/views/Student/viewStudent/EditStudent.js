import React, { useState } from 'react';
import { Button, TextField, Typography, Card, CardContent, Box, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';

function EditStudent({ studentId }) {
  // Fetch student data based on studentId from API or state
  const initialFormData = {
    id: studentId,
    name: 'Student 1',
    className: 'Class I',
    dob: '2000-01-01',
    gender: 'Male',
    address: '123 Main Street',
    contactNumber: '123-456-7890',
    email: 'student@example.com',
    parentName: 'Parent 1',
    parentContact: '987-654-3210',
    emergencyContact: '999-999-9999',
    medicalHistory: 'No known medical history',
    nationality: 'Country'
  };

  const [formData, setFormData] = useState(initialFormData);

  // Handle form submission
  const handleSubmit = () => {
    console.log('Submitted Data:', formData);
    // Implement your submission logic here
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Card elevation={3}>
      <CardContent>
        <Box mb={2}>
          <Button onClick={handleBack} startIcon={<ArrowBackIcon />} variant="outlined" color="primary">
            Back
          </Button>
        </Box>
        <Typography variant="h4" gutterBottom>
          Edit Student Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Class" name="className" value={formData.className} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField type="date" label="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} fullWidth />
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField label="Gender" name="gender" value={formData.gender} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Address" name="address" value={formData.address} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Contact Number" name="contactNumber" value={formData.contactNumber} onChange={handleChange} fullWidth />
          </Grid>
        </Grid>
        <br />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField type="email" label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Parent/Guardian Name" name="parentName" value={formData.parentName} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Parent/Guardian Contact"
              name="parentContact"
              value={formData.parentContact}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
        <br />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Emergency Contact"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Medical History" name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Nationality" name="nationality" value={formData.nationality} onChange={handleChange} fullWidth />
          </Grid>
        </Grid>
        <br />
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Save
        </Button>
      </CardContent>
    </Card>
  );
}

export default EditStudent;
