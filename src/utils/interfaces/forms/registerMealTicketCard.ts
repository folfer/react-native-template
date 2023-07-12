import { FormikProps } from 'formik';

export interface IRegisterMealTicketCardFormProps {
  cardNumber: number;
  userCardName: string;
  validity: string;
  cvv: number;
  cpf: number;
  surname: string;
}

export type IRegisterMealTicketCardForm = FormikProps<IRegisterMealTicketCardFormProps>;
