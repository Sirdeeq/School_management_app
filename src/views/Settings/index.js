import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardHeader,
  CircularProgress,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  CardContent,
  Button,
  Grid,
  TextField,
  Alert
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { Visibility, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // If a file is selected, convert it to a data URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      // If no file is selected, use the entered URL
      setSelectedImage(event.target.value);
    }
  };

  const profiles = [
    {
      id: 1,
      name: 'John Doe',
      role: 'teacher',
      status: 'active',
      username: 'john_doe',
      description: 'A passionate teacher',
      profilePicture: 'path-to-john-doe-image.jpg',
      password: '********'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'student',
      status: 'inactive',
      username: 'jane_smith',
      description: 'A curious student',
      profilePicture: 'path-to-jane-smith-image.jpg',
      password: '********'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      role: 'parent',
      status: 'active',
      username: 'bob_johnson',
      description: 'A caring parent',
      profilePicture: 'path-to-bob-johnson-image.jpg',
      password: '********'
    }
    // Add more profiles as needed
  ];

  const handleViewProfile = (event, profileId) => {
    event.stopPropagation();
    navigate(`/settings/profile-settings/${profileId}`);
  };

  // Accordion state
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // State for Alert
  const [alertOpen, setAlertOpen] = useState(false);

  // State for profile data
  const [editedProfiles, setEditedProfiles] = useState([]);

  // State for edit mode
  const [editMode, setEditMode] = useState(false);

  // Function to handle edit button click
  const handleEdit = () => {
    setEditMode(true);
  };

  // Function to handle save changes button click
  const handleSaveChanges = (profileId, newName, newUsername, newDescription, newImage) => {
    // Update the profile data in state
    setEditedProfiles((prev) => [
      ...prev,
      {
        id: profileId,
        name: newName,
        username: newUsername,
        description: newDescription,
        profilePicture: newImage
      }
    ]);

    // Display MUI alert
    setAlertOpen(true);

    // Turn off edit mode
    setEditMode(false);
  };

  return (
    <Card>
      <CardHeader
        title="Profile Settings"
        avatar={<SettingsIcon style={{ fontSize: 30 }} />}
        action={
          <div>
            {/* App Settings Button */}
            <IconButton onClick={() => navigate('/settings/app-settings')} color="inherit">
              <SettingsIcon />
            </IconButton>
            {/* Loading Indicator */}
            <CircularProgress size={20} />
          </div>
        }
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {profiles.map((profile) => (
              <TableRow key={profile.id}>
                <TableCell>{profile.id}</TableCell>
                <TableCell>{profile.name}</TableCell>
                <TableCell>{profile.role}</TableCell>
                <TableCell>
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: profile.status === 'active' ? 'green' : 'red',
                      display: 'inline-block',
                      marginRight: '5px'
                    }}
                  ></div>
                  {profile.status}
                </TableCell>
                <TableCell>
                  <IconButton onClick={(event) => handleViewProfile(event, profile.id)}>
                    <Visibility />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {profiles.map((profile) => (
        <Accordion key={profile.id} expanded={expanded === `panel${profile.id}`} onChange={handleChange(`panel${profile.id}`)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{profile.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    {editMode ? (
                      <TextField label="Name" defaultValue={profile.name} fullWidth />
                    ) : (
                      <Typography variant="h5">{profile.name}</Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    {editMode ? (
                      <TextField label="Username" defaultValue={profile.username} fullWidth />
                    ) : (
                      <Typography variant="subtitle1">Username: {profile.username}</Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    {editMode ? (
                      <TextField label="Description" defaultValue={profile.description} fullWidth />
                    ) : (
                      <Typography variant="body1">Description: {profile.description}</Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    {editMode ? (
                      <div>
                        <TextField label="Profile Picture URL" value={selectedImage} onChange={handleImageChange} fullWidth />
                        <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginTop: '10px' }} />
                      </div>
                    ) : (
                      <img
                        src={selectedImage || profile.profilePicture}
                        alt="Profile"
                        style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '20px' }}
                      />
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    {/* Save Changes or Edit Button */}
                    {editMode ? (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() =>
                          handleSaveChanges(
                            profile.id,
                            'New Name', // Replace with actual data from the input
                            'New Username',
                            'New Description',
                            selectedImage || profile.profilePicture
                          )
                        }
                      >
                        Save Changes
                      </Button>
                    ) : (
                      <Button variant="contained" color="primary" onClick={handleEdit}>
                        Edit
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </AccordionDetails>
        </Accordion>
      ))}
      {/* MUI Alert for Profile Updated */}
      <Alert severity="success" sx={{ marginTop: 2 }} open={alertOpen} onClose={() => setAlertOpen(false)}>
        Profile updated successfully!
      </Alert>
      {/* Log edited profiles to console */}
      <Button variant="contained" color="secondary" onClick={() => console.log('Edited Profiles:', editedProfiles)}>
        Log Edited Profiles
      </Button>
    </Card>
  );
};

export default Settings;
