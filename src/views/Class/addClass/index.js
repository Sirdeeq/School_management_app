import React, { useState } from 'react';
import { TextField, Button, IconButton, Grid, Paper, Typography, Divider } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router';

export default function AddClass() {
  const [classInfo, setClassInfo] = useState({
    className: '',
    groups: [],
    sections: []
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClassInfo((prevClassInfo) => ({ ...prevClassInfo, [name]: value }));
  };

  const handleAddGroup = () => {
    setClassInfo((prevClassInfo) => ({
      ...prevClassInfo,
      groups: [...prevClassInfo.groups, '']
    }));
  };

  const handleAddSection = () => {
    setClassInfo((prevClassInfo) => ({
      ...prevClassInfo,
      sections: [...prevClassInfo.sections, '']
    }));
  };

  const handleSubmit = () => {
    console.log('Class Info:', classInfo);
    navigate('/class');
  };

  return (
    <div>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography variant="h5" gutterBottom>
          Academic Class Information
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Class Name" name="className" fullWidth value={classInfo.className} onChange={handleInputChange} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Groups
              </Typography>
              {classInfo.groups.map((group, index) => (
                <TextField key={index} label={`Group ${index + 1}`} fullWidth margin="normal" />
              ))}
              <IconButton color="primary" onClick={handleAddGroup}>
                <AddIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Sections
              </Typography>
              {classInfo.sections.map((section, index) => (
                <TextField key={index} label={`Section ${index + 1}`} fullWidth margin="normal" />
              ))}
              <IconButton color="primary" onClick={handleAddSection}>
                <AddIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Divider style={{ margin: '16px 0' }} />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
}
