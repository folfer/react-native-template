import { FormikProps } from 'formik';

export interface ILoginFormProps {
  email: string;
  password: string;
}

export type ILoginForm = FormikProps<ILoginFormProps>;
