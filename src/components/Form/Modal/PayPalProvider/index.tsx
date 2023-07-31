import React from 'react';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import PayPalButtons from './PayPalButtons';

const PayPalProvider = () => (
  <div style={{ maxWidth: '750px', minHeight: '200px' }}>
    <PayPalScriptProvider options={{ clientId: 'test', components: 'buttons', currency: 'USD' }}>
      <PayPalButtons showSpinner={false} />
    </PayPalScriptProvider>
  </div>
);

export default PayPalProvider;
