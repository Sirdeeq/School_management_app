import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Card, CardContent, CardActions } from '@mui/material';
import { useNavigate } from 'react-router';

const NewRoute = () => {
  const [routeData, setRouteData] = useState({
    routeName: '',
    startPoint: '',
    endPoint: '',
    distance: ''
  });

  const handleChange = (e) => {
    setRouteData({ ...routeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to the server
    console.log('Submitted Route Data:', routeData);
  };
  const navigate = useNavigate();

  return (
    <Container>
      <br />

      <Card mb={2}>
        <br />
        &nbsp; &nbsp; &nbsp;
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Back
        </Button>
        <br />
        <CardContent>
          <Typography variant="h5">New Route Form</Typography>
          <form>
            <TextField label="Route Name" name="routeName" value={routeData.routeName} onChange={handleChange} fullWidth margin="normal" />
            <TextField
              label="Start Point"
              name="startPoint"
              value={routeData.startPoint}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField label="End Point" name="endPoint" value={routeData.endPoint} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Distance" name="distance" value={routeData.distance} onChange={handleChange} fullWidth margin="normal" />
          </form>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default NewRoute;
