import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
} from '@mui/material';

const AppSettings = () => {
  // State for configuration settings
  const [appConfig, setAppConfig] = useState({
    schoolName: 'My School',
    theme: 'light',
    featureEnabled: true,
  });

  // Function to update configuration settings
  const handleConfigChange = (field, value) => {
    setAppConfig((prevConfig) => ({
      ...prevConfig,
      [field]: value,
    }));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">App Settings</Typography>

        {/* School Name */}
        <TextField
          label="School Name"
          value={appConfig.schoolName}
          onChange={(e) => handleConfigChange('schoolName', e.target.value)}
          fullWidth
          margin="normal"
        />

        {/* Theme */}
        <FormControlLabel
          control={
            <Switch
              checked={appConfig.theme === 'dark'}
              onChange={() =>
                handleConfigChange(
                  'theme',
                  appConfig.theme === 'light' ? 'dark' : 'light'
                )
              }
            />
          }
          label="Dark Theme"
        />

        {/* Feature Toggle */}
        <FormControlLabel
          control={
            <Switch
              checked={appConfig.featureEnabled}
              onChange={() =>
                handleConfigChange('featureEnabled', !appConfig.featureEnabled)
              }
            />
          }
          label="Enable Feature"
        />

        {/* Save Changes Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log('Save Changes', appConfig)}
        >
          Save Changes
        </Button>
      </CardContent>
    </Card>
  );
};

export default AppSettings;
