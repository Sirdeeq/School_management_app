import React, { useState } from 'react';
import { TextField, Button, IconButton, Grid, Paper, Typography, Divider, Select, MenuItem, InputLabel, FormControl, Card, CardContent, CardActions } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router';
// import GroupTable from './Group';
// import GroupCard from './ViewGroup';

export default function AddGroup() {
  const [classInfo, setClassInfo] = useState({
    className: '',
    groups: [],
    sections: [],
  });

  const [groupData, setGroupData] = useState([]);
  // const [selectedGroup, setSelectedGroup] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (event, groupIndex, sectionIndex, field) => {
    const { value } = event.target;
    const updatedGroups = [...classInfo.groups];
    if (sectionIndex !== undefined) {
      updatedGroups[groupIndex].sections[sectionIndex][field] = value;
    } else {
      updatedGroups[groupIndex][field] = value;
    }
    setClassInfo((prevClassInfo) => ({ ...prevClassInfo, groups: updatedGroups }));
  };

  const handleAddGroup = () => {
    setClassInfo((prevClassInfo) => ({
      ...prevClassInfo,
      groups: [...prevClassInfo.groups, { name: '', sections: [] }],
    }));
  };

  const handleAddSection = (groupIndex) => {
    const updatedGroups = [...classInfo.groups];
    updatedGroups[groupIndex].sections.push({ section: '', participants: '' });
    setClassInfo((prevClassInfo) => ({ ...prevClassInfo, groups: updatedGroups }));
  };

  const handleDeleteGroup = (groupIndex) => {
    const updatedGroups = [...classInfo.groups];
    updatedGroups.splice(groupIndex, 1);
    setClassInfo((prevClassInfo) => ({ ...prevClassInfo, groups: updatedGroups }));
  };

  const handleDeleteSection = (groupIndex, sectionIndex) => {
    const updatedGroups = [...classInfo.groups];
    updatedGroups[groupIndex].sections.splice(sectionIndex, 1);
    setClassInfo((prevClassInfo) => ({ ...prevClassInfo, groups: updatedGroups }));
  };

  const handleSubmit = () => {
    const newData = {
      className: classInfo.className,
      groups: classInfo.groups,
    };
    setGroupData([...groupData, newData]);
    setClassInfo({
      className: '',
      groups: [],
    });
    navigate('/group');
    console.log(newData);
  };

  const classNames = ['Class A', 'Class B', 'Class C', 'Class D'];


  return (
    <div>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography variant="h5" gutterBottom>
          Add New Group Or Section
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Class Name</InputLabel>
                <Select name="className" value={classInfo.className} onChange={(e) => handleInputChange(e, null, null, 'className')}>
                  {classNames.map((className) => (
                    <MenuItem key={className} value={className}>
                      {className}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {classInfo.groups.map((group, groupIndex) => (
              <Grid item xs={12} key={groupIndex}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                      Group {groupIndex + 1}
                    </Typography>
                    <TextField
                      label={`Group Name`}
                      value={group.name}
                      onChange={(e) => handleInputChange(e, groupIndex, null, 'name')}
                      fullWidth
                      margin="normal"
                    />
                    <Typography variant="subtitle2" gutterBottom>
                      Sections
                    </Typography>
                    {group.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <TextField
                          label={`Section ${sectionIndex + 1}`}
                          value={section.section}
                          onChange={(e) => handleInputChange(e, groupIndex, sectionIndex, 'section')}
                          fullWidth
                          margin="normal"
                        />
                        <TextField
                          label={`Participants`}
                          value={section.participants}
                          onChange={(e) => handleInputChange(e, groupIndex, sectionIndex, 'participants')}
                          fullWidth
                          margin="normal"
                        />
                        <IconButton color="error" onClick={() => handleDeleteSection(groupIndex, sectionIndex)}>
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    ))}
                  </CardContent>
                  <CardActions>
                    <IconButton color="primary" onClick={() => handleAddSection(groupIndex)}>
                      <AddIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDeleteGroup(groupIndex)}>
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            <IconButton color="primary" onClick={handleAddGroup}>
              <AddIcon />
            </IconButton>
          </Grid>
          <Divider style={{ margin: '16px 0' }} />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </Paper>
      {/* <GroupTable data={dummyData} onView={setSelectedGroup} onDelete={(item) => console.log('Delete:', item)} />
      {selectedGroup && <GroupCard data={selectedGroup} />} */}
    </div>
  );
}
