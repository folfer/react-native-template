import {
  ILoginForm,
  IRegisterForm,
  IResetPasswordRequestForm,
  IResetPasswordRequestCodeForm,
  IResetPasswordRequestEmailForm,
  IRegisterCardForm,
  IProfilePersonForm,
  IProfileContactForm,
  IProfilePermissionForm,
  IDeliveryForm,
} from '../interfaces/forms';

export type withChildren<T = {}> = T & { children?: React.ReactNode };
export type IElementMap = { [key: string]: JSX.Element };
export type IFunctionMap = { [key: string]: () => any };
export type IStringMap = { [key: string]: string };
export type IStringToAnyMap = { [key: string]: any };
export type StringToNumberMap = { [key: string]: number };
export type INumberToForm = { [key: number]: IFormOption };
export type INumberToNumber = { [key: number]: number };
export type IStringToBool = { [key: string]: boolean };

export type IFormOption =
  | ILoginForm
  | IRegisterForm
  | IResetPasswordRequestForm
  | IResetPasswordRequestCodeForm
  | IResetPasswordRequestEmailForm
  | IProfilePersonForm
  | IProfileContactForm
  | IProfilePermissionForm
  | IDeliveryForm
  | IRegisterCardForm;

export interface IAppContext {
  api: string;
  socket: string;
  theme: string;
}

export interface IAccordionPressResp {
  id?: string;
  isOpen: boolean;
}

export interface IClientContext {
  pro: string;
  dev: string;
  socket: string;
  theme: string;
}

export interface ISvgIconProps {
  color?: string | undefined;
  width?: number;
  height?: number;
  size?: string;
  border?: number;
}

export interface IAdressText {
  completeAddress: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface IModalSize {
  height: number;
  width: number;
}

export type IClient = 'outback';

export type IBaseContext = 'pro' | 'dev';

export type IClientsContext = Record<IClient, IClientContext>;

export type ISliderImage = {
  uri: string;
};

export type IResponse<T> = T | undefined;

export type ILiteralObj<T> = { [key: string | number]: T };

export type IServicesTypes = 'DELIVERY' | 'WITHDRAWAL' | 'RESERVE' | 'WAITLIST' | 'TAKEAWAY' | 'DINEIN';

export type ISelectorItem = {
  label: string;
  isActive: boolean;
};

export type IListVariants =
  | 'menu'
  | 'bestSellers'
  | 'promotions'
  | 'more'
  | 'menuCategory'
  | 'cart'
  | 'combineCart'
  | 'history'
  | 'combine';
