import { FormikProps } from 'formik';

export interface IResetPasswordFormRequestEmailProps {
  email: string;
}

export interface IResetPasswordFormRequestCodeProps {
  email: string;
  code: string;
}

export interface IResetPasswordFormRequestProps {
  newPassword: string;
  confirmPassword: string;
}

export type IResetPasswordRequestEmailForm =
  FormikProps<IResetPasswordFormRequestEmailProps>;

export type IResetPasswordRequestCodeForm =
  FormikProps<IResetPasswordFormRequestCodeProps>;

export type IResetPasswordRequestForm =
  FormikProps<IResetPasswordFormRequestProps>;
