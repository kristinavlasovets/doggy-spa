import * as yup from 'yup';

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
      .matches(phoneRegExp, 'Invalid phone format')
      .min(10, 'Phone number is too short')
      .max(10, 'Phone number is too long'),
    timeslot: yup.array().required('At least one timeslot is required'),
    creditCardNumber: yup
      .string()
      .required('Credit Card Number is required')
      .matches(digitsRegExp, 'Must be only digits')
      .min(16, 'Must contain 16 numbers')
      .max(16, 'Must contain 16 numbers'),
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
