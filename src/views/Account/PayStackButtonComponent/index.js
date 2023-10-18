import React from 'react';
import { PaystackButton } from 'react-paystack';

const PayStackButtonComponent = ({ amount, onSuccess, onClose }) => {
  const publicKey = 'pk_live_933acab3b74765444ebd05dfe9a994a9bcfe66aa';
//   const testKey = 'sk_test_17f8ee0aa11a1bb746481ea8db4d4fc8f624b4ad';

  const config = {
    reference: new Date().getTime(),
    email: 'ssirdeeq@gmail.com',
    amount: amount * 100,
    publicKey: publicKey
  };

  return (
    <PaystackButton
      text="Pay Now"
      className="paystack-button"
      callback={(response) => onSuccess(response)}
      close={(...args) => onClose(...args)}
      reference={config.reference}
      email={config.email}
      amount={config.amount}
      paystackkey={config.publicKey}
      tag="button"
    />
  );
};

export default PayStackButtonComponent;
