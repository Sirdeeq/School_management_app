import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box } from '@mui/material';
import { Add as AddIcon, Visibility as VisibilityIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
// import { Delete as DeleteIcon, Visibility as VisibilityIcon, Edit as EditIcon, Add as AddIcon } from '@mui/icons-material';

import { gridSpacing } from 'config.js';

// assets
import MonetizationOnTwoTone from '@mui/icons-material/MonetizationOnTwoTone';
import DescriptionTwoTone from '@mui/icons-material/DescriptionTwoTone';
import ThumbUpAltTwoTone from '@mui/icons-material/ThumbUpAltTwoTone';
import CalendarTodayTwoTone from '@mui/icons-material/CalendarTodayTwoTone';
import ReportCard from 'views/Dashboard/ReportCard';

function ClassList() {
  // Mock data for class lists, groups, sections, and students
  const classLists = [
    { id: 1, className: 'I', numStudents: 25 },
    { id: 2, className: 'II', numStudents: 30 },
    { id: 3, className: 'III', numStudents: 28 }
    // Add more class lists as needed
  ];

  const groups = ['A', 'B', 'C']; // Mock data for groups
  const sections = ['Section A', 'Section B', 'Section C']; // Mock data for sections
  const students = [
    { id: 1, name: 'Student 1', age: 15, grade: 'A' },
    { id: 2, name: 'Student 2', age: 16, grade: 'B' },
    { id: 3, name: 'Student 3', age: 14, grade: 'A' }
    // Add more students as needed
  ];

  // Function to handle delete action
  const handleDelete = () => {
    // Implement your delete logic here
    // For example, you can remove the class list with the given ID from the state or API
  };
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <div>
      <Grid container spacing={2}>
        <Box mb={2}>
          <Button onClick={() => navigate('/addClass')} startIcon={<AddIcon />} variant="outlined" color="primary">
            New Class
          </Button>
        </Box>
        &nbsp;
        <Box mb={2}>
          <Button onClick={() => navigate('/addGroup')} startIcon={<AddIcon />} variant="outlined" color="primary">
            New Group & New Section
          </Button>
        </Box>
        &nbsp;
        <Box mb={2}>
          <Button onClick={() => navigate('/addSubject')} startIcon={<AddIcon />} variant="outlined" color="primary">
            New Subject
          </Button>
        </Box>
        &nbsp;
        <Box mb={2}>
          <Button onClick={() => navigate('/classRoutine')} startIcon={<AddIcon />} variant="outlined" color="primary">
            New Routine
          </Button>
        </Box>
        &nbsp;
        <Box mb={2}>
          <Button onClick={() => navigate('/class/test')} startIcon={<AddIcon />} variant="outlined" color="primary">
            New Test
          </Button>
        </Box>
        &nbsp;
        <Box mb={2}>
          <Button onClick={() => navigate('/class/exams')} startIcon={<AddIcon />} variant="outlined" color="primary">
            New Exams
          </Button>
        </Box>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item lg={3} sm={6} xs={12}>
                <ReportCard
                  primary="20"
                  secondary="All Classes"
                  color={theme.palette.warning.main}
                  //   footerData="10%"
                  iconPrimary={MonetizationOnTwoTone}
                  //   iconFooter={TrendingUpIcon}
                />
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <ReportCard
                  primary="14"
                  secondary="All Groups"
                  color={theme.palette.error.main}
                  //   footerData="28% "
                  iconPrimary={CalendarTodayTwoTone}
                  //   iconFooter={TrendingDownIcon}
                />
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <ReportCard
                  primary="20"
                  secondary="All Sections"
                  color={theme.palette.success.main}
                  //   footerData="100%"
                  iconPrimary={DescriptionTwoTone}
                  //   iconFooter={TrendingUpIcon}
                />
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <ReportCard
                  primary="30"
                  secondary="All Activities"
                  color={theme.palette.primary.main}
                  //   footerData="100%"
                  iconPrimary={ThumbUpAltTwoTone}
                  //   iconFooter={TrendingUpIcon}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Class</TableCell>
                  <TableCell>Number of Students</TableCell>
                  <TableCell>Other Column</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {classLists.map((classList) => (
                  <TableRow key={classList.id}>
                    <TableCell>{classList.className}</TableCell>
                    <TableCell>{classList.numStudents}</TableCell>
                    <TableCell>Other Data</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        startIcon={<VisibilityIcon />}
                        onClick={() => {
                          navigate('/viewClass');
                        }}
                        style={{ marginRight: '8px' }}
                      >
                        View
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<EditIcon />}
                        onClick={() => {
                          // Implement your edit action here
                        }}
                        style={{ marginRight: '8px' }}
                      >
                        Edit
                      </Button>
                      <IconButton color="error" onClick={() => handleDelete(classList.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        {/* Grid for Groups */}
        <Grid item xs={6}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>All Groups</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {groups.map((group, index) => (
                  <TableRow key={index}>
                    <TableCell>{group}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        startIcon={<VisibilityIcon />}
                        onClick={() => {
                          // Implement your view action here
                        }}
                        style={{ marginRight: '8px' }}
                      >
                        View
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<EditIcon />}
                        onClick={() => {
                          // Implement your edit action here
                        }}
                        style={{ marginRight: '8px' }}
                      >
                        Edit
                      </Button>
                      <IconButton
                        color="error"
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
        </Grid>
        {/* Grid for Sections */}
        <Grid item xs={6}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>All Sections</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sections.map((section, index) => (
                  <TableRow key={index}>
                    <TableCell>{section}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        startIcon={<VisibilityIcon />}
                        onClick={() => {
                          // Implement your view action here
                        }}
                        style={{ marginRight: '8px' }}
                      >
                        View
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<EditIcon />}
                        onClick={() => {
                          // Implement your edit action here
                        }}
                        style={{ marginRight: '8px' }}
                      >
                        Edit
                      </Button>
                      <IconButton
                        color="error"
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
        </Grid>
        {/* Grid for Students */}
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Grade</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.age}</TableCell>
                    <TableCell>{student.grade}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        startIcon={<VisibilityIcon />}
                        onClick={() => {
                          // Implement your view action here
                        }}
                        style={{ marginRight: '8px' }}
                      >
                        View
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<EditIcon />}
                        onClick={() => {
                          // Implement your edit action here
                        }}
                        style={{ marginRight: '8px' }}
                      >
                        Edit
                      </Button>
                      <IconButton color="error" onClick={() => handleDelete(student.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default ClassList;
