import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Divider, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import PayStackButtonComponent from '../PayStackButtonComponent';

const NewTransactionSlip = ({ studentName, transactionDetails }) => {
  const navigate = useNavigate();
  const [paymentType, setPaymentType] = useState('');

  if (!transactionDetails || typeof transactionDetails !== 'object') {
    return <div>Error: Invalid transaction details</div>;
  }

  const { date, amount } = transactionDetails;

  if (!date || typeof amount !== 'number') {
    return <div>Error: Invalid transaction details</div>;
  }

  const handleBack = () => {
    navigate(-1);
  };

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handlePaymentSuccess = (response) => {
    // Handle successful payment
    console.log('Payment successful:', response);

    // TODO: Save receipt or perform other actions
  };

  const handlePaymentClose = () => {
    // Handle payment modal close
    console.log('Payment closed');
  };

  return (
    <Card>
      <CardContent>
        <IconButton onClick={handleBack} color="primary">
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" align="center">
          New Transaction Slip
        </Typography>
        <Divider style={{ margin: '15px 0' }} />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Student Name:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">{studentName}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle1">Transaction Date:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">{date}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle1">Amount:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">{`$${amount}`}</Typography>
          </Grid>

          {/* Payment Type Selection */}
          <Grid item xs={6}>
            <Typography variant="subtitle1">Payment Type:</Typography>
          </Grid>
          <Grid item xs={6}>
            <select value={paymentType} onChange={handlePaymentTypeChange}>
              <option value="">Select Payment Type</option>
              <option value="credit_card">Credit Card</option>
              <option value="bank_transfer">Bank Transfer</option>
            </select>
          </Grid>

          <Grid item xs={12}>
            <PayStackButtonComponent
              amount={amount}
              onSuccess={handlePaymentSuccess}
              onClose={handlePaymentClose}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default NewTransactionSlip;
