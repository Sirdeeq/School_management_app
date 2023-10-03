import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';

function AddStudent() {
  const [formData, setFormData] = useState({
    studentName: '',
    className: '',
    dob: '',
    gender: '',
    address: '',
    contactNumber: '',
    email: '',
    parentName: '',
    parentContact: '',
    emergencyContact: '',
    medicalHistory: '',
    nationality: ''
  });

  const navigate = useNavigate();

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

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Student Registration
      </Typography>
      <Box mb={2}>
        <Button onClick={handleBack} startIcon={<ArrowBackIcon />} variant="outlined" color="primary">
          Back
        </Button>
      </Box>
      {/* Student Biodata Section */}
      <Typography variant="h4" gutterBottom>
        Student Biodata
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Student Name" name="studentName" value={formData.studentName} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Class" name="className" value={formData.className} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField type="date" label="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Gender" name="gender" value={formData.gender} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Address" name="address" value={formData.address} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Contact Number" name="contactNumber" value={formData.contactNumber} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField type="email" label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth />
        </Grid>
      </Grid>

      {/* Parent Information Section */}
      <Typography variant="h4" gutterBottom>
        Parent Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Parent Name" name="parentName" value={formData.parentName} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Parent Contact" name="parentContact" value={formData.parentContact} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Emergency Contact"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Medical History" name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Nationality" name="nationality" value={formData.nationality} onChange={handleChange} fullWidth />
        </Grid>
      </Grid>
      <br />
      <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </div>
  );
}

export default AddStudent;
