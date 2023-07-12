import { FormikProps } from 'formik';

export interface IProfilePersonFormProps {
  name: string;
  document: string;
  paswordddd: string;
  birthday: string;
}

export type IProfilePersonForm = FormikProps<IProfilePersonFormProps>;
