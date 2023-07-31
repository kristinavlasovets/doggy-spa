import React, { FC } from 'react';

import { envVariables } from '@/constants';
import { PayPalButtons as Buttons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

import { PayPalButtonsProps } from './types';

const { payPalCreateOrderUrl, payPalCaptureOrderUrl } = envVariables;

const PayPalButtons: FC<PayPalButtonsProps> = ({ showSpinner }) => {
  const [{ isPending }] = usePayPalScriptReducer();

  function createOrder() {
    return fetch(payPalCreateOrderUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cart: [
          {
            sku: '1blwyeo8',
            quantity: 2,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  }
  function onApprove(data: { orderID: string }) {
    return fetch(payPalCaptureOrderUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    }).then((response) => response.json());
  }

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
