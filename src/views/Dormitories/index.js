import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  CircularProgress,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import { Visibility, Delete } from '@mui/icons-material';

const DormitoryManager = () => {
  const [dormitories, setDormitories] = useState([
    { id: 1, name: 'Dorm A', rooms: [] },
    { id: 2, name: 'Dorm B', rooms: [] }
  ]);

  const [formData, setFormData] = useState({
    dormitoryName: '',
    roomName: '',
    bedPersonName: '',
    searchQuery: ''
  });

  const [selectedBed, setSelectedBed] = useState(null);

  const [viewDialogOpen, setViewDialogOpen] = useState(false);

  const [showAllDorms, setShowAllDorms] = useState(false);

  const [loading, setLoading] = useState(false);

//   const handleAddDormitory = () => {
//     setDormitories((prevDormitories) => [
//       ...prevDormitories,
//       {
//         id: prevDormitories.length + 1,
//         name: formData.dormitoryName,
//         rooms: []
//       }
//     ]);
//     setFormData({ ...formData, dormitoryName: '' });
//   };

  const handleAddRoom = (dormitoryId) => {
    setDormitories((prevDormitories) =>
      prevDormitories.map((dorm) =>
        dorm.id === dormitoryId
          ? {
              ...dorm,
              rooms: [...dorm.rooms, { id: dorm.rooms.length + 1, name: formData.roomName, beds: [] }]
            }
          : dorm
      )
    );
    setFormData({ ...formData, roomName: '' });
  };

  const handleAddBed = (dormitoryId, roomId) => {
    setDormitories((prevDormitories) =>
      prevDormitories.map((dorm) =>
        dorm.id === dormitoryId
          ? {
              ...dorm,
              rooms: dorm.rooms.map((room) =>
                room.id === roomId
                  ? {
                      ...room,
                      beds: [
                        ...room.beds,
                        {
                          id: room.beds.length + 1,
                          personName: formData.bedPersonName,
                          status: 'available'
                        }
                      ]
                    }
                  : room
              )
            }
          : dorm
      )
    );
    setFormData({ ...formData, bedPersonName: '' });
  };

  const handleViewBed = (bed) => {
    setSelectedBed(bed);
    setViewDialogOpen(true);
  };

  const handleDeleteBed = (bedId) => {
    setDormitories((prevDormitories) =>
      prevDormitories.map((dorm) =>
        dorm.rooms.map((room) => ({
          ...room,
          beds: room.beds.filter((bed) => bed.id !== bedId)
        }))
      )
    );
    setViewDialogOpen(false);
  };

  const handleViewDialogClose = () => {
    setSelectedBed(null);
    setViewDialogOpen(false);
  };

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleToggleAllDorms = (event, newValue) => {
    setShowAllDorms(newValue === 'all');
  };

  const filteredDormitories = showAllDorms
    ? dormitories
    : dormitories.filter((dorm) => dorm.name.toLowerCase().includes(formData.searchQuery.toLowerCase()));

  const filteredBeds = dormitories.reduce((acc, dorm) => {
    if (filteredDormitories.some((filteredDorm) => filteredDorm.id === dorm.id)) {
      dorm.rooms.forEach((room) => {
        room.beds.forEach((bed) => {
          acc.push({
            dormName: dorm.name,
            roomName: room.name,
            personName: bed.personName
          });
        });
      });
    }
    return acc;
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Dormitory Management</Typography>

        {/* Search and Toggle Buttons */}
        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          <Grid item xs={12} md={6} lg={4}>
            <TextField
              label="Search"
              value={formData.searchQuery}
              onChange={(e) => setFormData({ ...formData, searchQuery: e.target.value })}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Button variant="contained" color="primary" onClick={handleSearch}>
              Search
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ToggleButtonGroup value={showAllDorms ? 'all' : 'filtered'} exclusive onChange={handleToggleAllDorms}>
              <ToggleButton value="all">All Dorms</ToggleButton>
              <ToggleButton value="filtered">Filtered Dorms</ToggleButton>
            </ToggleButtonGroup>
          </Grid>
        </Grid>

        {/* Display Filtered Beds in a Table */}
        {loading && <CircularProgress />}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Dorm Name</TableCell>
                <TableCell>Room Name</TableCell>
                <TableCell>Person Name</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredBeds.map((bed, index) => (
                <TableRow key={index}>
                  <TableCell>{bed.dormName}</TableCell>
                  <TableCell>{bed.roomName}</TableCell>
                  <TableCell>{bed.personName}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleViewBed(bed)}>
                      <Visibility />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Display Dormitories, Rooms, and Beds */}
        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          {filteredDormitories.map((dorm) => (
            <Grid item key={dorm.id} xs={12} md={6} lg={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{dorm.name}</Typography>

                  {/* Add Room */}
                  <TextField
                    label="Room Name"
                    value={formData.roomName}
                    onChange={(e) => setFormData({ ...formData, roomName: e.target.value })}
                    fullWidth
                    margin="normal"
                  />
                  <Button variant="contained" color="primary" onClick={() => handleAddRoom(dorm.id)}>
                    Add Room
                  </Button>

                  {/* Display Rooms */}
                  {dorm.rooms.map((room) => (
                    <div key={room.id}>
                      <Typography variant="subtitle1">{room.name}</Typography>

                      {/* Add Bed */}
                      <TextField
                        label="Person Name"
                        value={formData.bedPersonName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            bedPersonName: e.target.value
                          })
                        }
                        fullWidth
                        margin="normal"
                      />
                      <Button variant="contained" color="primary" onClick={() => handleAddBed(dorm.id, room.id)}>
                        Add Bed
                      </Button>

                      {/* Display Beds */}
                      <TableContainer>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>ID</TableCell>
                              <TableCell>Person Name</TableCell>
                              <TableCell>Action</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {room.beds.map((bed) => (
                              <TableRow key={bed.id}>
                                <TableCell>{bed.id}</TableCell>
                                <TableCell>{bed.personName}</TableCell>
                                <TableCell>
                                  <IconButton onClick={() => handleViewBed(bed)}>
                                    <Visibility />
                                  </IconButton>
                                  <IconButton onClick={() => handleDeleteBed(bed.id)}>
                                    <Delete />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>

      {/* Bed View Dialog */}
      <Dialog open={viewDialogOpen} onClose={handleViewDialogClose}>
        <DialogTitle>Bed Information</DialogTitle>
        <DialogContent>
          {selectedBed && (
            <div>
              <Typography variant="subtitle1">{`Bed ${selectedBed.id} - Person Name: ${selectedBed.personName}`}</Typography>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleViewDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default DormitoryManager;
