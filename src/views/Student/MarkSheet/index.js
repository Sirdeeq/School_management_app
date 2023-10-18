import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Divider,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const StudentMarkSheet = ({ studentData, onClose }) => {
 
  // const studentData = {
  //   student: 'John Doe',
  //   attitude: 'Excellent',
  //   effort: 'High',
  //   behavior: 'Good',
  //   courses: [
  //     { name: 'Math', grades: [90, 85, 88] },
  //     { name: 'Science', grades: [78, 92, 86] }
  //     // Add more courses as needed
  //   ]
  // };

  if (!studentData || !studentData.student) {
    // If studentData is undefined or doesn't have a student property, you can handle it accordingly
    return (
      <Card>
        <CardContent>
          <Typography variant="body1">Invalid student data</Typography>
          <IconButton onClick={onClose} color="primary">
            <CloseIcon />
          </IconButton>
        </CardContent>
      </Card>
    );
  }

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
          Mark Sheet
        </Typography>

        <Typography variant="subtitle1">Attitude: {studentData.attitude}</Typography>
        <Typography variant="subtitle1">Effort: {studentData.effort}</Typography>
        <Typography variant="subtitle1">Behavior: {studentData.behavior}</Typography>

        {studentData.courses && studentData.courses.length > 0 ? (
          <div style={{ marginTop: '16px' }}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Course Name</TableCell>
                    <TableCell>Grade</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentData.courses.map((course) => (
                    <TableRow key={course.name}>
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

export default StudentMarkSheet;
