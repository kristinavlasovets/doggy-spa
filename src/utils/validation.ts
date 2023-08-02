import * as yup from 'yup';

import { Value } from '@/components/Form/types';
import { digitsRegExp, expiryDateRegExp, nameRegExp, phoneRegExp } from '@/constants';

export const newsletterSchema = yup
  .object({
    email: yup.string().required('Email is required').email('Invalid format. Must contain @'),
  })
  .required();

export const formSchema = yup
  .object({
    firstName: yup
      .string()
      .required('First Name is required')
      .matches(nameRegExp, 'Must be only letters'),
    lastName: yup
      .string()
      .required('Last Name is required')
      .matches(nameRegExp, 'Must be only letters'),
    email: yup.string().required('Email is required').email('Invalid format. Must contain @'),
    phoneNumber: yup
      .string()
      .required('Phone number is required')
      .matches(phoneRegExp, 'Invalid phone format. Please, use +375(XX)XXX-XX-XX format'),
    timeslot: yup.array().required('At least one timeslot is required'),
    creditCardNumber: yup
      .string()
      .required('Credit Card Number is required')
      .matches(digitsRegExp, 'Must be only digits')
      .min(19, 'Must contain 16 numbers')
      .max(19, 'Must contain 16 numbers'),
    expiryDate: yup
      .string()
      .required('Expiry Date is required')
      .matches(expiryDateRegExp, 'Must be in the MM/YY format'),
    cvv: yup
      .string()
      .required('CVV is required')
      .matches(digitsRegExp, 'Must be only digits')
      .min(3, 'CVV must contain 3 numbers')
      .max(3, 'CVV must contain 3 numbers'),
    nameOnCard: yup
      .string()
      .required('Name On Card is required')
      .matches(nameRegExp, 'Must be only letters'),
  })
  .required();

export const checkIsDateValid = (value: Value) => {
  const isPastDate = value! <= new Date();

  const chosenDate = isPastDate
    ? 'You should choose an upcoming date'
    : value?.toString().slice(4, 15);

  return { isPastDate, chosenDate };
};
