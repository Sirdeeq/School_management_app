import React, { useState } from 'react';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  TextField,
  Typography,
  Box
} from '@mui/material';
import { Edit as EditIcon, Save as SaveIcon, Visibility as VisibilityIcon, Delete as DeleteIcon, ArrowDropDown } from '@mui/icons-material';

function ViewClass() {
  // Mock data for class information, students, groups, and sections
  const classes = [
    { id: 1, name: 'Class I', numStudents: 25, students: [], groups: [], sections: [] }
    // { id: 2, name: 'Class II', numStudents: 30, students: [], groups: [], sections: [] }
    // Add more classes as needed
  ];

  // Mock data for student information
  const students = [
    { id: 1, name: 'Student 1', position: '1st', average: 90 },
    { id: 2, name: 'Student 2', position: '2nd', average: 85 }
    // Add more students as needed
  ];

  // State to manage edit mode for class information
  const [editMode, setEditMode] = useState(false);

  // State to manage class information
  const [classInfo, setClassInfo] = useState(classes);

  // Toggle table to display student information
  const toggleTable = (classId) => {
    setClassInfo((prevClassInfo) => prevClassInfo.map((cls) => (cls.id === classId ? { ...cls, showTable: !cls.showTable } : cls)));
  };

  // Handle actions for student (view and delete)
  const handleAction = (action, studentId) => {
    console.log(`Performing ${action} action on student with ID ${studentId}`);
    // Implement your view and delete logic here
  };

  // Toggle edit mode for class information
  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  // Handle save for class information
  const handleSave = () => {
    console.log('Saving class information:', classInfo);
    // Implement your save logic here
    toggleEditMode();
  };

  // Mock data for groups and sections
  const groupsData = [
    { id: 1, name: 'Group A' },
    { id: 2, name: 'Group B' }
    // Add more groups as needed
  ];

  const sectionsData = [
    { id: 1, name: 'Section A' },
    { id: 2, name: 'Section B' }
    // Add more sections as needed
  ];

  // State to manage edit mode for groups and sections
  const [editGroupsMode, setEditGroupsMode] = useState(false);
  const [editSectionsMode, setEditSectionsMode] = useState(false);

  // State to manage groups and sections data
  const [groups, setGroups] = useState(groupsData);
  const [sections, setSections] = useState(sectionsData);

  // Toggle edit mode for groups
  const toggleGroupsEditMode = () => {
    setEditGroupsMode((prev) => !prev);
  };

  // Toggle edit mode for sections
  const toggleSectionsEditMode = () => {
    setEditSectionsMode((prev) => !prev);
  };

  // Handle save for groups
  const handleGroupsSave = () => {
    console.log('Saving groups:', groups);
    // Implement your save logic here
    toggleGroupsEditMode();
  };

  // Handle save for sections
  const handleSectionsSave = () => {
    console.log('Saving sections:', sections);
    // Implement your save logic here
    toggleSectionsEditMode();
  };

  const [subjects] = useState([
    { id: 1, name: 'Mathematics', textbook: 'Math Book 1', readingMaterials: 'Workbook 1, Practice Sheets' },
    { id: 2, name: 'Science', textbook: 'Science Book 1', readingMaterials: 'Lab Manual, Reference Materials' }
    // Add more subjects as needed
  ]);

  const [selectedSubjectId, setSelectedSubjectId] = useState(null);

  // Function to toggle dropdown for a specific subject
  const toggleDropdownForSubject = (subjectId) => {
    setSelectedSubjectId((prevId) => (prevId === subjectId ? null : subjectId));
  };

  return (
    <div>
      <Grid container spacing={2}>
        {classInfo.map((cls) => (
          <Grid key={cls.id} item xs={12}>
            <Paper style={{ padding: '16px' }}>
              {editMode ? (
                <>
                  <TextField
                    label="Class Name"
                    value={cls.name}
                    onChange={(e) =>
                      setClassInfo((prevClassInfo) => prevClassInfo.map((c) => (c.id === cls.id ? { ...c, name: e.target.value } : c)))
                    }
                  />
                  <TextField
                    label="Number of Students"
                    type="number"
                    value={cls.numStudents}
                    onChange={(e) =>
                      setClassInfo((prevClassInfo) =>
                        prevClassInfo.map((c) => (c.id === cls.id ? { ...c, numStudents: e.target.value } : c))
                      )
                    }
                  />
                  <IconButton onClick={handleSave}>
                    <SaveIcon />
                  </IconButton>
                </>
              ) : (
                <>
                  <div>
                    <strong>Class Name:</strong> {cls.name}
                  </div>
                  <div>
                    <strong>Number of Students:</strong> {cls.numStudents}
                  </div>
                  <IconButton onClick={toggleEditMode}>
                    <EditIcon />
                  </IconButton>
                </>
              )}
              <br />
              <Button onClick={() => toggleTable(cls.id)}>Toggle Student Table</Button>
              {cls.showTable && (
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Student Name</TableCell>
                        <TableCell>Position</TableCell>
                        <TableCell>Average</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {students.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell>{student.name}</TableCell>
                          <TableCell>{student.position}</TableCell>
                          <TableCell>{student.average}</TableCell>
                          <TableCell>
                            <IconButton onClick={() => handleAction('View', student.id)}>
                              <VisibilityIcon />
                            </IconButton>
                            <IconButton onClick={() => handleAction('Delete', student.id)}>
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Paper>
          </Grid>
        ))}
        {/* Grid for Groups */}
        <Grid item xs={6}>
          <Paper style={{ padding: '16px' }}>
            {editGroupsMode ? (
              <>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Group Name</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {groups.map((group) => (
                        <TableRow key={group.id}>
                          <TableCell>
                            <TextField
                              value={group.name}
                              onChange={(e) =>
                                setGroups((prevGroups) => prevGroups.map((g) => (g.id === group.id ? { ...g, name: e.target.value } : g)))
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <IconButton onClick={handleGroupsSave}>
                              <SaveIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            ) : (
              <>
                <Typography variant="h6" gutterBottom>
                  All Groups
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Group Name</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {groups.map((group) => (
                        <TableRow key={group.id}>
                          <TableCell>{group.name}</TableCell>
                          <TableCell>
                            <IconButton onClick={toggleGroupsEditMode}>
                              <EditIcon />
                            </IconButton>
                            <IconButton
                              onClick={() => {
                                // Implement your delete action here
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}
          </Paper>
        </Grid>
        {/* Grid for Sections */}
        <Grid item xs={6}>
          <Paper style={{ padding: '16px' }}>
            {editSectionsMode ? (
              <>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Section Name</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {sections.map((section) => (
                        <TableRow key={section.id}>
                          <TableCell>
                            <TextField
                              value={section.name}
                              onChange={(e) =>
                                setSections((prevSections) =>
                                  prevSections.map((s) => (s.id === section.id ? { ...s, name: e.target.value } : s))
                                )
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <IconButton onClick={handleSectionsSave}>
                              <SaveIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            ) : (
              <>
                <Typography variant="h6" gutterBottom>
                  All Sections
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Section Name</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {sections.map((section) => (
                        <TableRow key={section.id}>
                          <TableCell>{section.name}</TableCell>
                          <TableCell>
                            <IconButton onClick={toggleSectionsEditMode}>
                              <EditIcon />
                            </IconButton>
                            <IconButton
                              onClick={() => {
                                // Implement your delete action here
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}
          </Paper>
        </Grid>
        {/* Grid for Subjects */}
        <Grid item xs={12}>
          <Paper style={{ padding: '16px' }}>
            <Typography variant="h5" gutterBottom>
              Subjects
            </Typography>
            <Grid container spacing={2}>
              {subjects.map((subject) => (
                <Grid key={subject.id} item xs={3}>
                  <Box
                    style={{
                      border: '1px solid #ccc',
                      padding: '8px',
                      cursor: 'pointer',
                      position: 'relative',
                      zIndex: selectedSubjectId === subject.id ? 1 : 'auto'
                    }}
                  >
                    <div>{subject.name}</div>
                    {selectedSubjectId === subject.id && (
                      <div>
                        <div>
                          <strong>Textbook:</strong> {subject.textbook}
                        </div>
                        <div>
                          <strong>Other Reading Materials:</strong> {subject.readingMaterials}
                        </div>
                      </div>
                    )}
                    <Button onClick={() => toggleDropdownForSubject(subject.id)}>
                      <ArrowDropDown />
                    </Button>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default ViewClass;
