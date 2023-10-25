// GroupCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ViewGroup = ({ data }) => {
  return (
    <Card variant="outlined" style={{ maxWidth: 400, margin: 'auto', marginTop: 20 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Group Details
        </Typography>
        <Typography variant="body1" gutterBottom>
          Class Name: {data.className}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Group: {data.group}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Section: {data.section}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ViewGroup;
