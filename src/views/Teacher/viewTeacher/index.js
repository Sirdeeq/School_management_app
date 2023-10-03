import React from 'react';
import { Typography, Button, Card, CardContent, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';

function ViewStudent({ studentId }) {
  // Fetch student data based on studentId from API or state
  const studentData = {
    id: studentId,
    name: 'Teacher 1',
    className: 'Class I',
    dob: '2000-01-01',
    gender: 'Male',
    address: '123 Main Street',
    contactNumber: '123-456-7890',
    email: 'teacher@example.com',
    parentName: 'Parent 1',
    parentContact: '987-654-3210',
    emergencyContact: '999-999-9999',
    medicalHistory: 'No known medical history',
    nationality: 'Country'
  };
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Card>
      <CardContent>
        <Box mb={2}>
          <Button onClick={handleBack} startIcon={<ArrowBackIcon />} variant="outlined" color="primary">
            Back
          </Button>
        </Box>

        <Typography variant="h4" gutterBottom>
          Student Information
        </Typography>
        <Typography>Name: {studentData.name}</Typography>
        <Typography>Class: {studentData.className}</Typography>
        <Typography>Date of Birth: {studentData.dob}</Typography>
        <Typography>Gender: {studentData.gender}</Typography>
        <Typography>Address: {studentData.address}</Typography>
        <Typography>Contact Number: {studentData.contactNumber}</Typography>
        <Typography>Email: {studentData.email}</Typography>
        <Typography>Parent/Guardian Name: {studentData.parentName}</Typography>
        <Typography>Parent/Guardian Contact: {studentData.parentContact}</Typography>
        <Typography>Emergency Contact: {studentData.emergencyContact}</Typography>
        <Typography>Medical History: {studentData.medicalHistory}</Typography>
        <Typography>Nationality: {studentData.nationality}</Typography>
      </CardContent>
    </Card>
  );
}

export default ViewStudent;
