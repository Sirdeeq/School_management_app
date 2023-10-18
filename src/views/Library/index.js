import React, { useEffect, useState } from 'react';
import {
  Typography,
  Container,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SearchIcon from '@mui/icons-material/Search';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import BookForm from './BookForm';
import CategoryForm from './CategoryForm';

// ... (previous imports)

const Library = () => {
    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showBookForm, setShowBookForm] = useState(false);
    const [showCategoryForm, setShowCategoryForm] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

  const handleAddBook = (bookData) => {
    setBooks([...books, { id: books.length + 1, ...bookData }]);
    setShowBookForm(false);
  };

  const handleAddCategory = (category) => {
    setCategories([...categories, category]);
    setShowCategoryForm(false);
  };

  const handleView = (book) => {
    setSelectedBook(book);
  };

  const handleEdit = (book) => {
    setSelectedBook(book);
    setIsEditMode(true);
    setShowBookForm(true);
  };

  const handleReplace = (newBookData) => {
    // Assuming you have a function to update the book data
    const updatedBooks = books.map((book) => (book.id === selectedBook.id ? { ...book, ...newBookData } : book));

    setBooks(updatedBooks);
    setIsEditMode(false);
    setShowBookForm(false);
  };

  const handleDelete = (bookId) => {
    // Handle delete logic
    setBooks(books.filter((book) => book.id !== bookId));
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredBooks = selectedCategory ? books.filter((book) => book.category === selectedCategory) : books;

  useEffect(() => {
    if (isEditMode && selectedBook) {
      // Assuming you have a function to fetch book data by ID
      const fetchBookDataById = (bookId) => {
        return books.find((b) => b.id === bookId) || null;
      };

      const bookData = fetchBookDataById(selectedBook.id);
      console.log(bookData);
    }
  }, [isEditMode, selectedBook, books]);

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            Library
          </Typography>
          <Box>
            <IconButton color="inherit" onClick={() => setShowBookForm(true)}>
              <AddIcon />
              <Typography variant="h6" component="div" sx={{ marginRight: '10px', color: 'white' }}>
                Add Book
              </Typography>
            </IconButton>
          </Box>
          <Box>
            <IconButton color="inherit" onClick={() => setShowCategoryForm(true)}>
              <AddIcon />
              <Typography variant="h6" component="div" sx={{ marginRight: '10px', color: 'white' }}>
                Add Category
              </Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {showBookForm && (
        <BookForm
          onSubmit={isEditMode ? handleReplace : handleAddBook}
          categories={categories}
          bookData={selectedBook}
          isEditMode={isEditMode}
        />
      )}
      {showCategoryForm && <CategoryForm onSubmit={handleAddCategory} />}

      <Box my={2} display="flex" alignItems="center">
        <TextField
          variant="outlined"
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Box>

      {/* Category Select */}
      <Box my={2}>
        <FormControl fullWidth>
          <InputLabel>Filter by Category</InputLabel>
          <Select value={selectedCategory} onChange={handleCategoryChange}>
            <MenuItem value={null}>All Categories</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Book Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Book Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBooks.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.id}</TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.publicationYear}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleView(book.id)}>
                    <RemoveRedEyeIcon />
                  </IconButton>
                  <IconButton color="warning" onClick={() => handleEdit(book)}>
                    <ModeEditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(book.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={2} display="flex" justifyContent="space-between">
        <IconButton color="primary" disabled>
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton color="primary">
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Library;
