import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  InputLabel,
  Typography,
  TextareaAutosize,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Test = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    section: '',
    session: '',
    subject: '',
    class: '',
    studentName: '',
    regNo: '',
    questions: [
      {
        id: 1,
        questionType: 'objective',
        question: '',
        questionNumberType: 'normal'
      }
    ]
  });

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddQuestionCard = () => {
    const newId = formData.questions.length + 1;
    setFormData((prevData) => ({
      ...prevData,
      questions: [
        ...prevData.questions,
        {
          id: newId,
          questionType: 'objective',
          question: '',
          questionNumberType: 'normal'
        }
      ]
    }));
  };

  const handleQuestionInputChange = (id, name, value) => {
    const newQuestions = formData.questions.map((question) =>
      question.id === id ? { ...question, [name]: value } : question
    );
    setFormData((prevData) => ({ ...prevData, questions: newQuestions }));
  };

  const handleDeleteQuestionCard = (id) => {
    const newQuestions = formData.questions.filter((question) => question.id !== id);
    setFormData((prevData) => ({ ...prevData, questions: newQuestions }));
  };

  const handleSubmit = () => {
    console.log(formData);
    // Implement your logic for form submission here
  };

  return (
    <Box p={3}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="School Name"
            value={formData.schoolName}
            onChange={(e) => handleInputChange('schoolName', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Section" value={formData.section} onChange={(e) => handleInputChange('section', e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Session" value={formData.session} onChange={(e) => handleInputChange('session', e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Subject" value={formData.subject} onChange={(e) => handleInputChange('subject', e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Class" value={formData.class} onChange={(e) => handleInputChange('class', e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Student Name"
            value={formData.studentName}
            onChange={(e) => handleInputChange('studentName', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Registration Number"
            value={formData.regNo}
            onChange={(e) => handleInputChange('regNo', e.target.value)}
          />
        </Grid>

        {formData.questions.map((question) => (
          <Grid item xs={12} key={question.id}>
            <Card>
              <CardContent>
                <Box display="flex" justifyContent="flex-end">
                  <IconButton onClick={() => handleDeleteQuestionCard(question.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </Box>
                <Typography variant="h6" gutterBottom>
                  Question {question.id}
                </Typography>
                <TextareaAutosize
                  rowsMin={4}
                  placeholder="Enter your question..."
                  style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc' }}
                  value={question.question}
                  onChange={(e) => handleQuestionInputChange(question.id, 'question', e.target.value)}
                />

                <FormControl fullWidth style={{ marginTop: '10px' }}>
                  <InputLabel>Question Type</InputLabel>
                  <Select
                    value={question.questionType}
                    onChange={(e) => handleQuestionInputChange(question.id, 'questionType', e.target.value)}
                  >
                    <MenuItem value="objective">Objective</MenuItem>
                    <MenuItem value="essay">Essay</MenuItem>
                    <MenuItem value="fill">Fill In The Blank</MenuItem>
                    {/* Add more question types */}
                  </Select>
                </FormControl>

                <FormControl fullWidth style={{ marginTop: '10px' }}>
                  <InputLabel>Number Type</InputLabel>
                  <Select
                    value={question.questionNumberType}
                    onChange={(e) => handleQuestionInputChange(question.id, 'questionNumberType', e.target.value)}
                  >
                    <MenuItem value="normal">Normal</MenuItem>
                    <MenuItem value="roman">Roman</MenuItem>
                    <MenuItem value="number">Number</MenuItem>
                    {/* Add more number types */}
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item xs={12} style={{ marginTop: '20px' }}>
          <Button variant="contained" color="primary" onClick={handleAddQuestionCard}>
            Add Question
          </Button>
        </Grid>

        <Grid item xs={12} style={{ marginTop: '20px' }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Test;
