import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  Typography,
  Snackbar,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Divider,
  Dialog,
  DialogContent
} from '@mui/material';

import MuiAlert from '@mui/material/Alert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router';

const ViewResult = ({ studentData, onClose }) => {
  const calculateAverage = (grades) => {
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return (sum / grades.length).toFixed(2);
  };

  return (
    <Card>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" component="div" gutterBottom>
            {studentData.student}
          </Typography>
          <IconButton onClick={onClose} color="primary">
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />

        <Typography variant="h6" gutterBottom>
          {studentData.student} Academics
        </Typography>

        <Typography variant="subtitle1">Attitude: {studentData.attitude}</Typography>
        <Typography variant="subtitle1">Effort: {studentData.effort}</Typography>
        <Typography variant="subtitle1">Behavior: {studentData.behavior}</Typography>

        {studentData.courses && studentData.courses.length > 0 ? (
          <div style={{ marginTop: '16px' }}>
            <Typography variant="h6">Courses</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Course Name</TableCell>
                    <TableCell>Average</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentData.courses.map((course, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{course.name}</TableCell>
                      <TableCell>{calculateAverage(course.grades)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ) : (
          <Typography variant="body1">No courses available for this student.</Typography>
        )}
      </CardContent>
    </Card>
  );
};

const ResultPublish = () => {
    const navigate = useNavigate();
  const [notice, setNotice] = useState({ open: false, type: 'success', message: '' });

  const classes = ['Class A', 'Class B', 'Class C'];
  const results = {
    'Class A': [
      {
        student: 'Student 1',
        score: 85,
        courses: [
          { name: 'Math', grades: [90, 85, 88] },
          { name: 'Science', grades: [78, 92, 86] }
        ],
        attitude: 'Excellent',
        behavior: 'Good',
        effort: 'High'
      },
      {
        student: 'Student 2',
        score: 92,
        courses: [
          { name: 'Math', grades: [92, 88, 90] },
          { name: 'Science', grades: [94, 90, 87] }
        ],
        attitude: 'Good',
        behavior: 'Excellent',
        effort: 'High'
      }
    ],
    'Class B': [
      {
        student: 'Student 3',
        score: 78,
        courses: [
          { name: 'English', grades: [80, 75, 82] },
          { name: 'History', grades: [72, 85, 78] }
        ],
        attitude: 'Average',
        behavior: 'Good',
        effort: 'Moderate'
      },
      {
        student: 'Student 4',
        score: 88,
        courses: [
          { name: 'English', grades: [88, 90, 85] },
          { name: 'History', grades: [86, 88, 90] }
        ],
        attitude: 'Good',
        behavior: 'Excellent',
        effort: 'High'
      }
    ],
    'Class C': [
      {
        student: 'Student 5',
        score: 95,
        courses: [
          { name: 'Physics', grades: [95, 96, 94] },
          { name: 'Chemistry', grades: [97, 92, 98] }
        ],
        attitude: 'Excellent',
        behavior: 'Excellent',
        effort: 'High'
      },
      {
        student: 'Student 6',
        score: 89,
        courses: [
          { name: 'Physics', grades: [88, 90, 92] },
          { name: 'Chemistry', grades: [92, 85, 90] }
        ],
        attitude: 'Good',
        behavior: 'Good',
        effort: 'Moderate'
      }
    ]
  };

  const handleClose = () => {
    setNotice((prevNotice) => ({ ...prevNotice, open: false }));
  };

  const handlePublishResults = () => {
    setNotice({ open: true, type: 'success', message: 'Results published successfully!' });
    navigate('/admin')
  };

  const [viewResultData, setViewResultData] = useState(null);

  const handleViewResult = (studentData) => {
    setViewResultData(studentData);
  };

  const handleCloseViewResult = () => {
    setViewResultData(null);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Publish Results for All Classes
      </Typography>

      {classes.map((className) => (
        <Card key={className} style={{ marginBottom: '16px' }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              {className}
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Student</TableCell>
                    <TableCell>Score</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {results[className].map((result) => (
                    <TableRow key={result.student}>
                      <TableCell>{result.student}</TableCell>
                      <TableCell>{result.score}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleViewResult(result)}>
                          <VisibilityIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      ))}

      <Button onClick={handlePublishResults} variant="contained" color="primary">
        Publish Results
      </Button>

      <Snackbar open={notice.open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <MuiAlert elevation={6} variant="filled" severity={notice.type} onClose={handleClose}>
          {notice.message}
        </MuiAlert>
      </Snackbar>

      {viewResultData && (
        <Dialog open={Boolean(viewResultData)} onClose={handleCloseViewResult}>
          <DialogContent>
            <ViewResult studentData={viewResultData} onClose={handleCloseViewResult} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ResultPublish;
