import { FormikProps } from 'formik';

export interface IProfilePermissionFormProps {
  nationality: boolean;
  sms: boolean;
  email: boolean;
}

export type IProfilePermissionForm = FormikProps<IProfilePermissionFormProps>;
