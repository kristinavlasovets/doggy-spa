import { envVariables } from '@/constants';

const { payPalCreateOrderUrl, payPalCaptureOrderUrl } = envVariables;

export function createOrder() {
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
export function onApprove(data: { orderID: string }) {
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
