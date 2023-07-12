import { FormikProps } from 'formik';

export interface IRegisterFormProps {
  name: string;
  document: string;
  phone: string;
  birthday: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type IRegisterForm = FormikProps<IRegisterFormProps>;
