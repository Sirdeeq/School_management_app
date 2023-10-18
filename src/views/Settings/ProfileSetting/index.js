import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, TextField, Button, Avatar, InputAdornment, IconButton, Alert } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import LockIcon from '@mui/icons-material/Lock';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate, useParams } from 'react-router-dom';

const ProfileSetting = () => {
    const navigate = useNavigate();
    const { profileId } = useParams();
    const [profilePicture, setProfilePicture] = useState(null);
    const [userName, setUserName] = useState('John Doe');
    const [description, setDescription] = useState('A passionate learner');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);

  // Function to toggle password visibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Function to handle profile picture change
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    // Handle file upload logic or store it in state for display
    setProfilePicture(file);
  };

  // Function to handle edit button click
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Function to handle save changes button click
  const handleSaveChanges = () => {
    // Check if passwords match
    if (newPassword !== confirmPassword) {
      console.error("Passwords don't match");
      return;
    }

    setIsEditing(false);

    // Save changes logic (e.g., update user name and description)
    console.log('Profile ID:', profileId);
    console.log('Updated User Name:', userName);
    console.log('Updated Description:', description);
    console.log('Updated Password:', newPassword);

    // Display MUI alert
    setAlertOpen(true);

    // Reset password fields
    setNewPassword('');
    setConfirmPassword('');

    // Navigate to settings route after a delay
    setTimeout(() => {
      navigate('/settings');
    }, 2000);
  };

  useEffect(() => {
    // Fetch profile data based on profileId
    console.log('Fetching data for profile with ID:', profileId);
    // Example: You may want to make an API request to get profile data
  }, [profileId]);
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Profile Settings
        </Typography>

        {/* Profile Picture */}
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <Avatar
              alt="Profile Picture"
              src={profilePicture ? URL.createObjectURL(profilePicture) : 'path-to-default-image'}
              sx={{ width: 100, height: 100 }}
            />
          </Grid>
          <Grid item>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="profile-picture-upload"
              type="file"
              onChange={handleProfilePictureChange}
            />
            <label htmlFor="profile-picture-upload">
              <IconButton component="span">
                <PhotoCameraIcon />
              </IconButton>
            </label>
          </Grid>
        </Grid>

        {/* User Name and Description */}
        <Typography variant="h6" gutterBottom style={{ marginTop: 20 }}>
          {isEditing ? 'Edit Profile' : 'Profile Information'}
          {isEditing && (
            <IconButton color="primary" onClick={handleSaveChanges}>
              <LockIcon />
            </IconButton>
          )}
        </Typography>
        <TextField
          fullWidth
          label="User Name"
          variant="outlined"
          margin="normal"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          InputProps={{
            startAdornment: isEditing && (
              <InputAdornment position="start">
                <EditIcon />
              </InputAdornment>
            )
          }}
          disabled={!isEditing}
        />
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          InputProps={{
            startAdornment: isEditing && (
              <InputAdornment position="start">
                <EditIcon />
              </InputAdornment>
            )
          }}
          disabled={!isEditing}
        />

        {/* Change Password */}
        <Typography variant="h6" gutterBottom style={{ marginTop: 20 }}>
          Change Password
        </Typography>
        <TextField
          fullWidth
          type={showPassword ? 'text' : 'password'}
          label="New Password"
          variant="outlined"
          margin="normal"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <TextField
          fullWidth
          type={showPassword ? 'text' : 'password'}
          label="Confirm Password"
          variant="outlined"
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        {/* Save Changes Button */}
        {!isEditing && (
          <Button variant="contained" color="primary" onClick={handleEdit} style={{ marginTop: 20 }}>
            Edit Profile
          </Button>
        )}
        {isEditing && (
          <Button variant="contained" color="primary" onClick={handleSaveChanges} style={{ marginTop: 20 }}>
            Save Changes
          </Button>
        )}

        {/* MUI Alert for Profile Updated */}
        <Alert severity="success" sx={{ marginTop: 2 }} open={alertOpen} onClose={() => setAlertOpen(false)}>
          Profile updated successfully!
        </Alert>
      </CardContent>
    </Card>
  );
};

export default ProfileSetting;
