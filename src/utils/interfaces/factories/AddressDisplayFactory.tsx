import { IAddressType, IUserActionSelectTypeResp } from './UserActionFactory';

export interface IAddressDisplayFactory {
  selectAddress(data: IAddressType[], index: number): IUserActionSelectTypeResp;
}
