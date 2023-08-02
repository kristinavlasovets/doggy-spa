import React from 'react';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import PayPalButtons from './PayPalButtons';
import { Wrapper } from './styles';

const PayPalProvider = () => (
  <Wrapper>
    <PayPalScriptProvider options={{ clientId: 'test', components: 'buttons', currency: 'USD' }}>
      <PayPalButtons showSpinner={false} />
    </PayPalScriptProvider>
  </Wrapper>
);

export default PayPalProvider;
