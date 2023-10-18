import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Popover,
  Paper,
  Divider
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { HdrPlus } from '@mui/icons-material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import TransactionSlip from './TransactionSlip';
import { useNavigate } from 'react-router';

const Account = () => {
  const navigate = useNavigate();
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  // Function to get account title by type
  //   const getAccountTitle = (accountType) => {
  //     switch (accountType) {
  //       case 'tuition':
  //         return 'Tuition Fee Accounts';
  //       case 'salary':
  //         return 'Salary Expense Accounts';
  //       case 'equipment':
  //         return 'Equipment Asset Accounts';
  //       case 'utilities':
  //         return 'Utilities Expense Accounts';
  //       default:
  //         return 'Other Accounts';
  //     }
  //   };

  const handleBack = () => {
    navigate(-1);
  };

  const handleAddSlip = () => {
    navigate('/account/new-transaction');
  };

  const handleView = (transaction) => {
    setSelectedTransaction(transaction);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseView = () => {
    setAnchorEl(null);
  };

  const handleDelete = (accountId) => {
    // TODO: Implement delete logic
    console.log(`Delete account with ID ${accountId}`);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const dummyData = [
    {
      id: '1',
      studentName: 'John Doe',
      transactionDetails: {
        date: '2023-10-16',
        paymentType: 'Credit Card',
        amount: 50.0
      },
      status: 'paid'
    },
    {
      id: '2',
      studentName: 'Jane Smith',
      transactionDetails: {
        date: '2023-10-17',
        paymentType: 'Bank Transfer',
        amount: 75.0
      },
      status: 'balance'
    },
    {
      id: '3',
      studentName: 'Bob Johnson',
      transactionDetails: {
        date: '2023-10-18',
        paymentType: 'Credit Card',
        amount: 100.0
      },
      status: 'unpaid'
    },
    {
      id: '4',
      studentName: 'Alice Williams',
      transactionDetails: {
        date: '2023-10-19',
        paymentType: 'Credit Card',
        amount: 60.0
      },
      status: 'balance'
    },
    {
      id: '5',
      studentName: 'Charlie Brown',
      transactionDetails: {
        date: '2023-10-20',
        paymentType: 'Bank Transfer',
        amount: 90.0
      },
      status: 'unpaid'
    },
    {
      id: '6',
      studentName: 'Eva Davis',
      transactionDetails: {
        date: '2023-10-21',
        paymentType: 'Credit Card',
        amount: 120.0
      },
      status: 'paid'
    }
  ];

  return (
    <Card>
      <CardContent>
        <IconButton onClick={handleBack} color="primary">
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={handleAddSlip} color="primary">
          <HdrPlus />
        </IconButton>
        <Typography variant="h5">Account Overview</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyData.map((data) => (
                <TableRow key={data.id}>
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.studentName}</TableCell>
                  <TableCell>
                    {data.status === 'paid' && <FiberManualRecordIcon style={{ color: 'green' }} />}
                    {data.status === 'balance' && <FiberManualRecordIcon style={{ color: 'yellow' }} />}
                    {data.status === 'unpaid' && <FiberManualRecordIcon style={{ color: 'red' }} />}
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined" onClick={() => handleView(data)}>
                      View
                    </Button>
                    &nbsp; &nbsp;
                    <Button variant="outlined" onClick={() => handleDelete(data.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleCloseView}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center'
          }}
        >
          <Paper style={{ padding: '20px', minWidth: '400px' }}>
            <Typography variant="h5" align="center">
              Transaction Details
            </Typography>
            <Divider style={{ margin: '15px 0' }} />
            {selectedTransaction && (
              <TransactionSlip studentName={selectedTransaction.studentName} status={selectedTransaction.status} transactionDetails={selectedTransaction.transactionDetails} />
            )}
          </Paper>
        </Popover>
      </CardContent>
    </Card>
  );
};

export default Account;
