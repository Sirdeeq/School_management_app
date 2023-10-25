import React, { useState } from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Input,
  InputAdornment,
  FormHelperText,
  Box
} from '@mui/material';
import { Visibility, Add } from '@mui/icons-material';
import { useNavigate } from 'react-router';
// Dummy data for subjects
const subjects = [
  { id: 1, name: 'Math', teacher: 'Mr. Smith' },
  { id: 2, name: 'Science', teacher: 'Mrs. Johnson' },
  { id: 3, name: 'History', teacher: 'Mr. Brown' }
  // Add more subjects as needed
];

// Dummy data for books
const books = {
  1: [
    { id: 1, title: 'Math Book 1' },
    { id: 2, title: 'Math Book 2' }
    // Add more books as needed
  ],
  2: [
    { id: 3, title: 'Science Book 1' },
    { id: 4, title: 'Science Book 2' }
    // Add more books as needed
  ],
  3: [
    { id: 5, title: 'History Book 1' },
    { id: 6, title: 'History Book 2' }
    // Add more books as needed
  ]
};

const BookList = ({ subjectId, open, onClose }) => {
  const booksForSubject = books[subjectId] || [];

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{`Books for Subject (${booksForSubject.length})`}</DialogTitle>
      <DialogContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {booksForSubject.map((book) => (
                <TableRow key={book.id}>
                  <TableCell>{book.id}</TableCell>
                  <TableCell>{book.title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

const AddBook = ({ open, onClose }) => {
  const [bookName, setBookName] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [newSubject, setNewSubject] = useState('');
  const [bookCoverImage, setBookCoverImage] = useState(null);
  const [author, setAuthor] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [genre, setGenre] = useState('');
  const [fileInputError, setFileInputError] = useState('');

  const handleSubmit = () => {
    console.log('Submitted Book:', {
      bookName,
      selectedSubject,
      newSubject,
      bookCoverImage,
      author,
      publicationYear,
      genre
    });
    onClose();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes('image')) {
      setFileInputError('');
      setBookCoverImage({ file, url: URL.createObjectURL(file) });
    } else {
      setFileInputError('Please upload a valid image file.');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add a Book</DialogTitle>
      <DialogContent>
        <TextField label="Book Name" value={bookName} onChange={(e) => setBookName(e.target.value)} fullWidth margin="normal" />
        <FormControl fullWidth margin="normal">
          <InputLabel id="subject-select-label">Subject</InputLabel>
          <Select
            labelId="subject-select-label"
            id="subject-select"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            disabled={Boolean(newSubject)}
          >
            {subjects.map((subject) => (
              <MenuItem key={subject.id} value={subject.id}>
                {subject.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>OR</FormHelperText>
          <TextField
            label="New Subject"
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
            fullWidth
            margin="normal"
            disabled={Boolean(selectedSubject)}
          />
        </FormControl>
        <input accept="image/*" style={{ display: 'none' }} id="book-cover-image" type="file" onChange={handleFileInputChange} />
        <label htmlFor="book-cover-image">
          <Input
            fullWidth
            id="book-cover-image-input"
            type="text"
            value={bookCoverImage ? bookCoverImage.file.name : ''}
            endAdornment={
              <InputAdornment position="end">
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </InputAdornment>
            }
            disabled
          />
        </label>
        {fileInputError && <FormHelperText error>{fileInputError}</FormHelperText>}
        {bookCoverImage && (
          <div style={{ marginTop: '10px' }}>
            <img src={bookCoverImage.url} alt="Book Cover" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
        )}
        <TextField label="Author" value={author} onChange={(e) => setAuthor(e.target.value)} fullWidth margin="normal" />
        <TextField
          label="Publication Year"
          value={publicationYear}
          onChange={(e) => setPublicationYear(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField label="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} fullWidth margin="normal" />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Subject = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [bookListOpen, setBookListOpen] = useState(false);
  const [addBookOpen, setAddBookOpen] = useState(false);
  const navigate = useNavigate();

  const handleView = (subjectId) => {
    setSelectedSubject(subjectId);
    setBookListOpen(true);
  };

  const handleCloseBookList = () => {
    setBookListOpen(false);
  };

  const handleAddBook = () => {
    setAddBookOpen(true);
  };

  const handleCloseAddBook = () => {
    setAddBookOpen(false);
  };

  return (
    <div>
      <Box mb={2}>
        <Button onClick={() => navigate('/addSubject')} startIcon={<Add />} variant="outlined" color="primary">
          New Subject
        </Button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <Button variant="contained" color="primary" onClick={handleAddBook}>
          <Add /> Add a Book
        </Button>
      </Box>
      <br />
      <Typography variant="h4">Subjects</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Subject Name</TableCell>
              <TableCell>Teacher</TableCell>
              <TableCell>Books</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subjects.map((subject) => (
              <TableRow key={subject.id}>
                <TableCell>{subject.name}</TableCell>
                <TableCell>{subject.teacher}</TableCell>
                <TableCell>{books[subject.id]?.length || 0}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleView(subject.id)}>
                    <Visibility />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <BookList subjectId={selectedSubject} open={bookListOpen} onClose={handleCloseBookList} />
      <AddBook open={addBookOpen} onClose={handleCloseAddBook} />
    </div>
  );
};

export default Subject;
