import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Box, Paper, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from 'react-router';

function AddTeacher() {
  const [formData, setFormData] = useState({
    teacherName: '',
    subject: '',
    qualification: '',
    dob: '',
    gender: '',
    address: '',
    contactNumber: '',
    email: '',
    cv: null
  });

  const navigate = useNavigate();

  // Handle form submission
  // ... (previous code)

  // Handle form submission
  const handleSubmit = () => {
    console.log('Submitted Data:', formData);
    // Implement your submission logic here, including file upload logic

    // Assuming you're using some kind of API call for submission
    // You can replace the following lines with your actual API call
    // For demonstration purposes, let's simulate a successful submission
    setTimeout(() => {
      console.log('Submission Successful!');
      // Navigate to the "/teacher" route
      navigate('/teacher');
    }, 1000); // Simulating a delay of 1 second (adjust as needed)
  };

  // ... (remaining code)

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, cv: file }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Add New Teacher
      </Typography>
      <Box mb={2}>
        <Button onClick={handleBack} startIcon={<ArrowBackIcon />} variant="outlined" color="primary">
          Back
        </Button>
      </Box>
      {/* Teacher Information Section */}
      <Typography variant="h4" gutterBottom>
        Teacher Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Teacher Name" name="teacherName" value={formData.teacherName} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Subject" name="subject" value={formData.subject} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Qualification" name="qualification" value={formData.qualification} onChange={handleChange} fullWidth />
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
      <br />

      {/* Academic Section */}
      <Typography variant="h4" gutterBottom>
        Academic
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="body1" gutterBottom>
              Upload CV (Word or PDF)
            </Typography>
            <input accept=".doc, .docx, .pdf" style={{ display: 'none' }} id="upload-cv" type="file" onChange={handleFileChange} />
            <label htmlFor="upload-cv">
              <IconButton color="primary" aria-label="upload cv" component="span">
                <CloudUploadIcon />
              </IconButton>
            </label>
            {formData.cv && <Typography variant="body2">{formData.cv.name}</Typography>}
          </Paper>
        </Grid>
      </Grid>
      <br />
      <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </div>
  );
}

export default AddTeacher;
