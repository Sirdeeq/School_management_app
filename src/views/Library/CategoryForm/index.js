import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';

const CategoryForm = ({ onSubmit }) => {
  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if needed
    onSubmit(category);
    // Optionally, reset the form
    setCategory('');
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px' }}>
      <Typography variant="h5" gutterBottom>
        New Category
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Category" fullWidth value={category} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Category
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default CategoryForm;
