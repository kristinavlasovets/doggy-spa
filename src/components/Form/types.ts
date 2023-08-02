export interface FormInputProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  timeslot: string[];
  creditCardNumber: string;
  expiryDate: string;
  cvv: string;
  nameOnCard: string;
}

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];
