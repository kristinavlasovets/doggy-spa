import React, { FC } from 'react';

import { createOrder, onApprove } from '@/utils';
import { PayPalButtons as Buttons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

import { PayPalButtonsProps } from './types';

const PayPalButtons: FC<PayPalButtonsProps> = ({ showSpinner }) => {
  const [{ isPending }] = usePayPalScriptReducer();

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <Buttons
        disabled={false}
        fundingSource={undefined}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </>
  );
};

export default PayPalButtons;
