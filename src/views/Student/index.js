import React from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
  Typography,
  Card,
  CardContent,
  Button,
  Box
} from '@mui/material';
import { Add as AddIcon, Visibility as VisibilityIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

//project import
import SalesLineCard from './SalesLineCard';
import SalesLineCardData from './chart/sale-chart-1';

import ReportCard from './ReportCard';
import { gridSpacing } from 'config.js';

// assets
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MonetizationOnTwoTone from '@mui/icons-material/MonetizationOnTwoTone';
import DescriptionTwoTone from '@mui/icons-material/DescriptionTwoTone';
import ThumbUpAltTwoTone from '@mui/icons-material/ThumbUpAltTwoTone';
import CalendarTodayTwoTone from '@mui/icons-material/CalendarTodayTwoTone';

// custom style
const FlatCardBlock = styled((props) => <Grid item sm={6} xs={12} {...props} />)(({ theme }) => ({
  padding: '25px 25px',
  borderLeft: '1px solid' + theme.palette.background.default,
  [theme.breakpoints.down('sm')]: {
    borderLeft: 'none',
    borderBottom: '1px solid' + theme.palette.background.default
  },
  [theme.breakpoints.down('md')]: {
    borderBottom: '1px solid' + theme.palette.background.default
  }
}));

// ==============================|| DASHBOARD DEFAULT ||============================== //

const Default = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const students = [
    { id: 1, name: 'Student 1', class: 'Class I', otherInfo: 'Other Info 1' },
    { id: 2, name: 'Student 2', class: 'Class II', otherInfo: 'Other Info 2' }
    // Add more students as needed
  ];

  const attendanceData = [
    { id: 1, studentId: 1, dailyPercentage: 80, totalPercentage: 90 },
    { id: 2, studentId: 2, dailyPercentage: 75, totalPercentage: 85 }
    // Add more attendance data as needed
  ];

  const handleAddStudent = () => {
    navigate('/addStudent');
  };

  // Handle navigation to ViewStudent route
  const handleViewStudent = () => {
    navigate(`/viewStudent`);

    // /${studentId}
  };

  // Handle view, edit, and delete actions
  const handleAction = (action, studentId) => {
    console.log(`Performing ${action} action on student with ID ${studentId}`);
    if (action === 'View') {
      handleViewStudent(studentId);
    } else if (action === 'Edit') {
      navigate('/editStudent');
    } else if (action === 'Delete') {
      // Implement your delete logic here
    }
  };

  return (
    <Grid container spacing={gridSpacing}>
      <Box mb={2}>
        <Button onClick={handleAddStudent} startIcon={<AddIcon />} variant="outlined" color="primary">
          New Student
        </Button>
      </Box>
      &nbsp; &nbsp;
      <Box mb={2}>
        <Button onClick={() => navigate('/student/mark-sheet')} startIcon={<AddIcon />} variant="outlined" color="primary">
          Student Mark Sheet
        </Button>
      </Box>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item lg={3} sm={6} xs={12}>
              <ReportCard
                primary="20"
                secondary="All Pending Students"
                color={theme.palette.warning.main}
                footerData="10%"
                iconPrimary={MonetizationOnTwoTone}
                iconFooter={TrendingUpIcon}
              />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <ReportCard
                primary="14"
                secondary="All Rejected Students"
                color={theme.palette.error.main}
                footerData="28% "
                iconPrimary={CalendarTodayTwoTone}
                iconFooter={TrendingDownIcon}
              />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <ReportCard
                primary="290"
                secondary="All Students"
                color={theme.palette.success.main}
                footerData="100%"
                iconPrimary={DescriptionTwoTone}
                iconFooter={TrendingUpIcon}
              />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <ReportCard
                primary="340"
                secondary="All Active Students"
                color={theme.palette.primary.main}
                footerData="100%"
                iconPrimary={ThumbUpAltTwoTone}
                iconFooter={TrendingUpIcon}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item lg={12} xs={12}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                      <SalesLineCard
                        chartData={SalesLineCardData}
                        title="Student Yearly Attendance"
                        percentage="3%"
                        icon={<TrendingUpIcon />}
                        footerData={[
                          {
                            value: '80%',
                            label: 'Percentage'
                          },
                          {
                            value: '340',
                            label: 'Students'
                          }
                        ]}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Student Name</TableCell>
                          <TableCell>Daily Percentage</TableCell>
                          <TableCell>Total Percentage</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {attendanceData.map((data) => (
                          <TableRow key={data.id}>
                            <TableCell>{students.find((s) => s.id === data.studentId)?.name}</TableCell>
                            <TableCell>{data.dailyPercentage}%</TableCell>
                            <TableCell>{data.totalPercentage}%</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <br />
                  <Grid item xs={12} sx={{ display: { md: 'block', sm: 'none' } }}>
                    <Card>
                      <CardContent sx={{ p: '0 !important' }}>
                        <Grid container alignItems="center" spacing={0}>
                          <FlatCardBlock>
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item>
                                <Typography variant="subtitle2" align="left">
                                  REALTY
                                </Typography>
                              </Grid>
                              <Grid item sm zeroMinWidth>
                                <Typography variant="h5" sx={{ color: theme.palette.error.main }} align="right">
                                  -0.99
                                </Typography>
                              </Grid>
                            </Grid>
                          </FlatCardBlock>
                          <FlatCardBlock>
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item>
                                <Typography variant="subtitle2" align="left">
                                  INFRA
                                </Typography>
                              </Grid>
                              <Grid item sm zeroMinWidth>
                                <Typography variant="h5" sx={{ color: theme.palette.success.main }} align="right">
                                  -7.66
                                </Typography>
                              </Grid>
                            </Grid>
                          </FlatCardBlock>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Student Name</TableCell>
                  <TableCell>Class</TableCell>
                  <TableCell>Other Information</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.class}</TableCell>
                    <TableCell>{student.otherInfo}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleAction('View', student.id)}>
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton onClick={() => handleAction('Edit', student.id)} style={{ color: 'green' }}>
                        <EditIcon />
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
        </Grid>
        <Divider />
        {/* Attendance Percentage Table */}
      </Grid>
    </Grid>
  );
};

export default Default;
