import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Card,
  Box
} from '@mui/material';
import { Visibility as VisibilityIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Add as AddIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router';

const GroupTable = ({ onDelete }) => {
  // Dummy data array
  const data = [
    {
      className: 'Class A',
      name: 'Group 1',
      sections: [
        { section: 'Section A', participants: 20 },
        { section: 'Section B', participants: 15 }
      ]
    },
    {
      className: 'Class B',
      name: 'Group 2',
      sections: [
        { section: 'Section X', participants: 18 },
        { section: 'Section Y', participants: 25 }
      ]
    }
    // Add more dummy data as needed
  ];

  const [selectedData, setSelectedData] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleView = (selectedItem) => {
    setSelectedData(selectedItem);
    setOpenDialog(true);
  };

  const handleDelete = (selectedItem) => {
    // Implement deletion logic
    onDelete(selectedItem);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const navigate = useNavigate();
  return (
    <Card variant="outlined" style={{ margin: '16px', padding: '16px' }}>
      <Box mb={2}>
        <Button onClick={() => navigate('/addGroup')} startIcon={<AddIcon />} variant="outlined" color="primary">
          New Group & New Section
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Class Name</TableCell>
            <TableCell>Group</TableCell>
            <TableCell>Section</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(
            (group, groupIndex) =>
              Array.isArray(group.sections) &&
              group.sections.map((section, sectionIndex) => (
                <TableRow key={`${groupIndex}-${sectionIndex}`}>
                  <TableCell>{group.className}</TableCell>
                  <TableCell>{group.name}</TableCell>
                  <TableCell>{section.section}</TableCell>
                  <TableCell>
                    <Tooltip title="View">
                      <IconButton onClick={() => handleView({ className: group.className, group: group.name, section: section.section })}>
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDelete({ className: group.className, group: group.name, section: section.section })}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
          )}
        </TableBody>
      </Table>

      {/* View More Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Group Details</DialogTitle>
        <DialogContent>
          {selectedData && (
            <>
              <div>
                <strong>Class Name:</strong> {selectedData.className}
              </div>
              <div>
                <strong>Group:</strong> {selectedData.group}
              </div>
              <div>
                <strong>Section:</strong> {selectedData.section}
              </div>
            </>
          )}
          <Button variant="contained" color="primary" onClick={handleCloseDialog}>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default GroupTable;
