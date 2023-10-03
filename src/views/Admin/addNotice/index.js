import React, { useState } from 'react';
import { Button, TextField, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const AddNotice = () => {
  const [notice, setNotice] = useState({ open: false, type: 'success', message: '' });
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Your form fields go here */}
        <TextField label="Notice" variant="outlined" fullWidth multiline rows={4} margin="normal" required />

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
