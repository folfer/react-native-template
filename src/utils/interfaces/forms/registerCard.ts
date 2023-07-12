import { FormikProps } from 'formik';

export interface IRegisterCardFormProps {
  cardNumber: string;
  userCardName: string;
  validity: string;
  cvv: string;
  cpf: string;
  surname: string;
}

export type IRegisterCardForm = FormikProps<IRegisterCardFormProps>;
