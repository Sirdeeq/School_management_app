import React, { useState } from 'react';
import { Button, Box, Typography, Card, TextareaAutosize, Input, IconButton, Toolbar, AppBar, Grid, Paper } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import SaveIcon from '@mui/icons-material/Save';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import AvatarEditor from 'react-avatar-editor';

const Exams = () => {
  const [text, setText] = useState('');
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState('black');
  const [image, setImage] = useState(null);
  const [savedItems, setSavedItems] = useState([]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFormat = (style) => {
    switch (style) {
      case 'bold':
        setBold(!bold);
        break;
      case 'italic':
        setItalic(!italic);
        break;
      case 'underline':
        setUnderline(!underline);
        break;
      default:
        break;
    }
  };

  const handleFontSizeChange = (e) => {
    const size = parseInt(e.target.value);
    setFontSize(size);
  };

  const handleFontColorChange = (color) => {
    setFontColor(color);
  };

  const handleSave = () => {
    setSavedItems([...savedItems, { text, bold, italic, underline, fontSize, fontColor, image }]);
    setText('');
    setBold(false);
    setItalic(false);
    setUnderline(false);
    setFontSize(16);
    setFontColor('black');
    setImage(null);
  };

  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropImage = () => {
    if (editor) {
      const canvas = editor.getImage();
      // Do something with the cropped canvas
      // For now, let's just display the base64 data in the text area
      setText(text + `\n[Cropped Image]\n${canvas.toDataURL()}`);
      setImage(null); // Clear the image after cropping
    }
  };

  const handleAddShape = () => {
    // Implement shape handling logic here
    // For now, let's just add a placeholder text
    setText(text + '\n[Shape]');
  };

  return (
    <Box p={3}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MS Word-like Editor
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
            <Paper variant="outlined" sx={{ padding: '8px' }}>
              <TextareaAutosize
                rowsMin={3}
                placeholder="Type here..."
                value={text}
                onChange={handleTextChange}
                style={{
                  width: '100%',
                  resize: 'none',
                  border: 'none',
                  outline: 'none',
                  fontSize: `${fontSize}px`,
                  fontWeight: bold ? 'bold' : 'normal',
                  fontStyle: italic ? 'italic' : 'normal',
                  textDecoration: underline ? 'underline' : 'none',
                  color: fontColor
                }}
              />
            </Paper>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Paper variant="outlined" sx={{ padding: '8px' }}>
            <Toolbar>
              <IconButton onClick={() => handleFormat('bold')}>
                <FormatBoldIcon color={bold ? 'primary' : 'inherit'} />
              </IconButton>
              <IconButton onClick={() => handleFormat('italic')}>
                <FormatItalicIcon color={italic ? 'primary' : 'inherit'} />
              </IconButton>
              <IconButton onClick={() => handleFormat('underline')}>
                <FormatUnderlinedIcon color={underline ? 'primary' : 'inherit'} />
              </IconButton>
              <IconButton>
                <FormatSizeIcon />
              </IconButton>
              <Input type="number" value={fontSize} onChange={handleFontSizeChange} style={{ width: '50px', marginLeft: '5px' }} />
              <IconButton onClick={() => handleFontColorChange('red')}>
                <FormatColorTextIcon style={{ color: 'red' }} />
              </IconButton>
              <IconButton onClick={() => handleFontColorChange('blue')}>
                <FormatColorTextIcon style={{ color: 'blue' }} />
              </IconButton>
              <IconButton onClick={() => handleFontColorChange('black')}>
                <FormatColorTextIcon style={{ color: 'black' }} />
              </IconButton>
              <IconButton onClick={handleSave}>
                <SaveIcon />
              </IconButton>
              <input type="file" accept="image/*" onChange={handleAddImage} style={{ display: 'none' }} id="image-input" />
              <label htmlFor="image-input">
                <IconButton component="span">
                  <AddPhotoAlternateIcon />
                </IconButton>
              </label>
              {image && (
                <div>
                  <AvatarEditor
                    ref={(ref) => setEditor(ref)}
                    image={image}
                    width={200}
                    height={200}
                    border={50}
                    color={[255, 255, 255, 0.6]} // RGBA
                    scale={1.2}
                  />
                  <Button variant="contained" color="primary" onClick={handleCropImage}>
                    Crop Image
                  </Button>
                </div>
              )}
              <IconButton onClick={handleAddShape}>
                <CropOriginalIcon />
              </IconButton>
            </Toolbar>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          {savedItems.map((item, index) => (
            <Card key={index} elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
              <Typography
                variant="body1"
                style={{
                  fontWeight: item.bold ? 'bold' : 'normal',
                  fontStyle: item.italic ? 'italic' : 'normal',
                  textDecoration: item.underline ? 'underline' : 'none',
                  fontSize: `${item.fontSize}px`,
                  color: item.fontColor
                }}
              >
                {item.text}
              </Typography>
              {item.image && (
                <div>
                  <Typography variant="subtitle1">Cropped Image:</Typography>
                  <img src={item.image} alt="Cropped" style={{ maxWidth: '100%' }} />
                </div>
              )}
            </Card>
          ))}
        </Grid>
      </Grid>

      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Submit
      </Button>
    </Box>
  );
};

export default Exams;
