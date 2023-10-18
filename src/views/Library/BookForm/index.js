import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@mui/material';

const BookForm = ({ onSubmit, categories }) => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    publicationYear: '',
    category: '',
    // Add more fields as needed
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if needed
    onSubmit(bookData);
    // Optionally, reset the form
    setBookData({
      title: '',
      author: '',
      genre: '',
      publicationYear: '',
      category: '',
    });
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px' }}>
      <Typography variant="h5" gutterBottom>
        New Book
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              name="title"
              fullWidth
              value={bookData.title}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Author"
              name="author"
              fullWidth
              value={bookData.author}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Genre"
              name="genre"
              fullWidth
              value={bookData.genre}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Publication Year"
              name="publicationYear"
              fullWidth
              value={bookData.publicationYear}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={bookData.category}
                onChange={handleChange}
                required
              >
                {categories && categories.length > 0 ? (
                  categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>
          {/* Add more fields as needed */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Add Book
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default BookForm;
