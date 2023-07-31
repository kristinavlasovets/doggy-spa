import { Value } from '@/components/Form/types';

export const checkIsDateValid = (value: Value) => {
  const isPastDate = value! <= new Date();

  const chosenDate = isPastDate
    ? 'You should choose an upcoming date'
    : value?.toString().slice(4, 15);

  return { isPastDate, chosenDate };
};
