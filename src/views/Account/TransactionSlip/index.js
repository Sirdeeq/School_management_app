import React from 'react';
import { Paper, Typography, Grid, Divider } from '@mui/material';

const TransactionSlip = ({ studentName, transactionDetails, status }) => {
  // Check if transactionDetails is defined
  if (!transactionDetails || typeof transactionDetails !== 'object') {
    return <div>Error: Invalid transaction details</div>;
  }

  // Extract properties from transactionDetails
  const { date, paymentType, amount } = transactionDetails;

  // Check if date, paymentType, and amount are defined
  if (!date || !paymentType || typeof amount !== 'number') {
    return <div>Error: Invalid transaction details</div>;
  }

  // Define colors based on the status
  let cardColor;
  switch (status) {
    case 'paid':
      cardColor = 'green';
      break;
    case 'unpaid':
      cardColor = 'red';
      break;
    case 'balance':
      cardColor = 'yellow';
      break;
    default:
      cardColor = 'white';
  }

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: 'auto', backgroundColor: cardColor }}>
      <Typography variant="h5" align="center">
        Student Transaction Slip
      </Typography>
      <Divider style={{ margin: '15px 0' }} />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Student Name:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">{studentName}</Typography>
        </Grid>

        {/* Add more transaction details based on your requirements */}
        <Grid item xs={6}>
          <Typography variant="subtitle1">Transaction Date:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">{date}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="subtitle1">Payment Type:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">{paymentType}</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="subtitle1">Amount:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1">{`$${amount}`}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TransactionSlip;
