import { IAddressType } from '~/utils';

export interface IUserActionContext {
  userActionInfosContext: IUserActionInfosContext;
  setUserActionInfosContext(value: IUserActionInfosContext): void;
  ambient: string;
  personCount: string;
  setAmbient(value: string): void;
  setPersonCount(value: string): void;
  firstView: IUserViewOptions;
  setFirstView(value: IUserViewOptions): void;
  addressTypes: IAddressType[];
  setAddressTypes(address: IAddressType[]): void;
}

export interface IUserActionInfosContext {
  text: string;
  buttonText: string;
  status: boolean;
}

export type IUserViewOptions = 'UserAction' | 'Queue';
