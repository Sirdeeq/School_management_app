import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import Vehicles from './Vehicles';

const Routes = () => {
  const [showVehicles, setShowVehicles] = useState(false);

  const handleShowVehicles = () => {
    setShowVehicles(true);
  };

  return (
    <Container>
      <Typography variant="h4">Routes Information</Typography>
      <Button variant="contained" onClick={handleShowVehicles}>
        View Vehicles
      </Button>
      {showVehicles && <Vehicles />}
    </Container>
  );
};

export default Routes;
