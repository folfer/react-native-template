import { FormikProps } from 'formik';

export interface IDeliveryFormProps {
  number: string;
  complement: string;
}

export type IDeliveryForm = FormikProps<IDeliveryFormProps>;
