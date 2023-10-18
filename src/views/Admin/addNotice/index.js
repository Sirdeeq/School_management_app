import React, { useState } from 'react';
import { Button, TextField, Snackbar, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const AddNotice = () => {
  const [notice, setNotice] = useState({ open: false, type: 'success', message: '' });
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here for handling form submission

    // Set the notice
    setNotice({ open: true, type: 'success', message: 'Your notice has been submitted successfully!' });

    // Route to /admin after a delay (for demonstration purposes)
    setTimeout(() => {
      navigate('/admin');
    }, 3000); // Adjust the delay as needed
  };

  const handleClose = () => {
    // Close the notice
    setNotice((prevNotice) => ({ ...prevNotice, open: false }));
  };

  const handleSelectChange = (event) => {
    const selectedValues = event.target.value;

    // If "All" is selected, set all options
    const allOptions = ['parents', 'teachers', 'students'];
    const updatedSelectedOptions = selectedValues.includes('all') ? allOptions : selectedValues;

    setSelectedOptions(updatedSelectedOptions);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Your form fields go here */}
        <TextField label="Notice" variant="outlined" fullWidth multiline rows={4} margin="normal" required />

        {/* Multi-select for options like All, parents, teachers, students */}
        <FormControl fullWidth margin="normal">
          <InputLabel>Select Recipients</InputLabel>
          <Select
            multiple
            value={selectedOptions}
            onChange={handleSelectChange}
            variant="outlined"
            renderValue={(selected) => selected.join(', ')}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="parents">Parents</MenuItem>
            <MenuItem value="teachers">Teachers</MenuItem>
            <MenuItem value="students">Students</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>

      {/* Snackbar to show notice */}
      <Snackbar open={notice.open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <MuiAlert elevation={6} variant="filled" severity={notice.type} onClose={handleClose}>
          {notice.message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default AddNotice;
