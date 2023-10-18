import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, Grid, Select, MenuItem, IconButton } from '@mui/material';
import { useNavigate } from 'react-router';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const BusMap = ({ vehicles }) => {
  const navigate = useNavigate();
  const [gridSize, setGridSize] = useState(9);
  const [liveLocation, setLiveLocation] = useState(null);
  const [viewStyle, setViewStyle] = useState('2d');

  const handleNewRoute = () => {
    navigate('/admin/transport/new-route');
  };

  const handleNewBus = () => {
    navigate('/admin/transport/new-bus');
  };

  const handleNewDriver = () => {
    navigate('/admin/transport/new-driver');
  };

  const handleTicketForm = () => {
    navigate('/admin/transport/ticket-form');
  };

  const handleGridSizeChange = (event) => {
    setGridSize(event.target.value);
  };

  const handleViewStyleChange = (event) => {
    setViewStyle(event.target.value);
  };

  const handleLiveLocation = () => {
    // Navigate to live location or perform any other action
    console.log('Navigating to live location...');
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const getMarkerIcon = (busName) => {
    return L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="background-color: green; color: white; padding: 5px; border-radius: 50%; display: inline-block; transform-origin: center; animation: shake 0.4s ease-in-out infinite;">${busName}</div>`,
    });
  };

  useEffect(() => {
    // Load Leaflet CSS dynamically to fix marker display issue
    import('leaflet/dist/leaflet.css');

    // Get live location
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          setLiveLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error('Error getting live location:', error);
        },
        {
          enableHighAccuracy: true,
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <>
      <Card style={{ marginTop: '16px' }}>
        <CardContent>
          <Typography variant="h5">Map Configuration</Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Typography>Grid Size:</Typography>
            </Grid>
            <Grid item>
              <Select value={gridSize} onChange={handleGridSizeChange}>
                {[9, 12, 15, 18, 21].map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item>
              <Typography>View Style:</Typography>
            </Grid>
            <Grid item>
              <Select value={viewStyle} onChange={handleViewStyleChange}>
                <MenuItem value="2d">2D View</MenuItem>
                <MenuItem value="3d">3D View</MenuItem>
              </Select>
            </Grid>
            <Grid item>
              <IconButton onClick={handleLiveLocation} color="primary">
                <span role="img" aria-label="Live Location">
                  📍
                </span>
              </IconButton>
            </Grid>
          </Grid>

          <MapContainer
            style={mapContainerStyle}
            center={liveLocation || [51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {vehicles.map((vehicle) => (
              <Marker key={vehicle.id} position={[vehicle.latitude, vehicle.longitude]} icon={getMarkerIcon(vehicle.name)}>
                <Popup>{vehicle.name}</Popup>
              </Marker>
            ))}
            {liveLocation && (
              <Marker position={liveLocation}>
                <Popup>You are here</Popup>
              </Marker>
            )}
          </MapContainer>
        </CardContent>
      </Card>
      <br />
      <Card>
        <CardContent>
          <Typography variant="h4">Bus Map</Typography>
          <Button variant="contained" onClick={handleNewRoute}>
            New Route
          </Button>
          &nbsp; &nbsp; &nbsp;
          <Button variant="contained" onClick={handleNewBus}>
            New Bus
          </Button>
          &nbsp; &nbsp; &nbsp;
          <Button variant="contained" onClick={handleTicketForm}>
            Ticket Form
          </Button>
          &nbsp; &nbsp; &nbsp;
          <Button variant="contained" onClick={handleNewDriver}>
            New Driver
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default BusMap;
