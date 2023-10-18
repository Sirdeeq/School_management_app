import React, { useState } from 'react';
import { Container, Typography, Button, Card, CardContent } from '@mui/material';
import Routes from './Routes';
import BusMap from './BusMap';

const Transport = () => {
  const [showRoutes, setShowRoutes] = useState(false);

  const handleShowRoutes = () => {
    setShowRoutes(true);
  };

  const dummyVehicles = [
    { id: 1, name: 'Bus 1', latitude: 12.0028, longitude: 8.5915 },
    { id: 2, name: 'Bus 2', latitude: 11.9656, longitude: 8.4442 },
    { id: 3, name: 'Bus 3', latitude: 11.9767, longitude: 8.4746 },
    { id: 4, name: 'Bus 4', latitude: 11.9966, longitude: 8.5167 },
    { id: 5, name: 'Bus 5', latitude: 12.0022, longitude: 8.5135 },
  ];
  

  return (
    <Container>
      <Typography variant="h3">School Transport Management</Typography>
      <Button variant="contained" onClick={handleShowRoutes}>
        View Routes
      </Button>
      <br />
      <br />
      {showRoutes && (
        <Card>
          <CardContent>
            <Routes />
          </CardContent>
        </Card>
      )}
    <br />
      <Card>
        <CardContent>
          <BusMap vehicles={dummyVehicles} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default Transport;
