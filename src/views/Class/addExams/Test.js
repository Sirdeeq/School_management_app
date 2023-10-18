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
  IconButton,
  Input,
  CardMedia
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';


const Test = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    section: '',
    session: '',
    subject: '',
    class: '',
    studentName: '',
    instruction: '',
    regNo: '',
    schoolLogo: null,
    questions: [
      {
        id: 1,
        questionType: '',
        question: '',
        questionNumberType: 'normal'
      }
    ]
  });
  const navigate = useNavigate();

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
          questionType: '',
          question: '',
          questionNumberType: 'normal'
        }
      ]
    }));
  };

  const handleAddOption = (questionId) => {
    const newQuestions = formData.questions.map((question) =>
      question.id === questionId
        ? {
            ...question,
            options: [...(question.options || []), { label: '', value: '' }]
          }
        : question
    );
    setFormData((prevData) => ({ ...prevData, questions: newQuestions }));
  };

  const handleDeleteOption = (questionId, optionIndex) => {
    const newQuestions = formData.questions.map((question) =>
      question.id === questionId
        ? {
            ...question,
            options: question.options.filter((_, index) => index !== optionIndex)
          }
        : question
    );
    setFormData((prevData) => ({ ...prevData, questions: newQuestions }));
  };

  const handleQuestionInputChange = (id, name, value) => {
    const newQuestions = formData.questions.map((question) => (question.id === id ? { ...question, [name]: value } : question));
    setFormData((prevData) => ({ ...prevData, questions: newQuestions }));
  };

  const handleDeleteQuestionCard = (id) => {
    const newQuestions = formData.questions.filter((question) => question.id !== id);
    setFormData((prevData) => ({ ...prevData, questions: newQuestions }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, schoolLogo: file }));
  };

  const handleQuestionOptionChange = (questionId, optionIndex, optionProperty, value) => {
    const newQuestions = formData.questions.map((question) =>
      question.id === questionId
        ? {
            ...question,
            options: question.options.map((option, index) => (index === optionIndex ? { ...option, [optionProperty]: value } : option))
          }
        : question
    );
    setFormData((prevData) => ({ ...prevData, questions: newQuestions }));
  };

  const handleSubmit = () => {
    console.log(formData);
    // Implement your logic for form submission here
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box p={3}>
      <Box mb={2}>
        <Button onClick={handleBack} startIcon={<ArrowBackIcon />} variant="outlined" color="primary">
          Back
        </Button>
      </Box>
      <Typography variant="h5" gutterBottom>
        Add New Test
      </Typography>
      <br />
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
          <Input fullWidth type="file" accept="image/*" onChange={handleFileChange} />
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
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            label="Instruction"
            value={formData.instruction}
            onChange={(e) => handleInputChange('instruction', e.target.value)}
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
                    {/* <MenuItem value="fill">Fill In The Blank</MenuItem> */}
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
                {question.questionType === 'objective' && (
                  <div>
                    <br />
                    <Button variant="outlined" color="primary" onClick={() => handleAddOption(question.id)}>
                      Add Option
                    </Button>
                    <br />
                    {question.options &&
                      question.options
                        .sort((a, b) => a.label.localeCompare(b.label))
                        .map((option, optionIndex) => (
                          <div key={optionIndex}>
                            <TextField
                              label={`Option ${optionIndex + 1}`}
                              value={option.label}
                              onChange={(e) => handleQuestionOptionChange(question.id, optionIndex, 'label', e.target.value)}
                            />
                            &nbsp; &nbsp;
                            <TextField
                              label="Value"
                              value={option.value}
                              onChange={(e) => handleQuestionOptionChange(question.id, optionIndex, 'value', e.target.value)}
                            />
                            <br />
                            <IconButton onClick={() => handleDeleteOption(question.id, optionIndex)} color="error">
                              <DeleteIcon />
                            </IconButton>
                          </div>
                        ))}
                  </div>
                )}
                {question.questionType === 'fill' && (
                  <div>
                    <TextField
                      fullWidth
                      label="Fill in the Blank Question"
                      value={question.question}
                      onChange={(e) => handleQuestionInputChange(question.id, 'question', e.target.value)}
                    />
                  </div>
                )}
                {question.questionType === 'fill' && (
                  <div style={{ borderBottom: '1px solid #000', width: '10px' }}>{question.question}</div>
                )}
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

        <Grid container spacing={2} item xs={12} style={{ marginTop: '20px' }}>
          {formData.schoolLogo && (
            <Card>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <CardMedia component="img" alt="School Logo" height="140" image={URL.createObjectURL(formData.schoolLogo)} />
                </Grid>
                <Grid item>
                  <Typography variant="h5">School Name: {formData.schoolName}</Typography>
                </Grid>
              </Grid>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography>Section: {formData.section}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography>Session: {formData.session}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography>Class: {formData.class}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography>Instruction: {formData.instruction}</Typography>
                  </Grid>
                  {formData.questions.map((question, index) => (
                    <Grid item xs={12} key={index}>
                      <Typography>
                        Question {index + 1}: {question.question}?
                      </Typography>
                    </Grid>
                  ))}
                  {/* Add more information fields */}
                </Grid>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Test;
