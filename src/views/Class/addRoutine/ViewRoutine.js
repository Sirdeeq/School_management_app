import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Button } from '@mui/material';

export default function ViewRoutine({ routine }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Card variant="outlined" style={{ maxWidth: 400, margin: 'auto', marginTop: 20 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Routine Details
        </Typography>
        <Typography variant="body1" gutterBottom>
          ID: {routine.id}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Name: {routine.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Type: {routine.type}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Time: {routine.time}
        </Typography>
        <Button variant="contained" onClick={handleBack} style={{ marginTop: 10 }}>
          Back
        </Button>
      </CardContent>
    </Card>
  );
}
