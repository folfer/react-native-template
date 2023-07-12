import { FormikProps } from 'formik';

export interface IProfileContactFormProps {
  phone: string;
  email: string;
}

export type IProfileContactForm = FormikProps<IProfileContactFormProps>;
