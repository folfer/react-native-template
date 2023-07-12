export interface IUserActionFactory {
  getContext(): IUserActionContext;
  changeStep(): IUserActionContext;
  updateContextStep(index: number): void;
  selectType(data: IType[], index: number): IUserActionSelectTypeResp;
  selectAddress(data: IAddressType[], index: number): IUserActionSelectTypeResp;
  cleanContext(
    types: IType[],
    address: IAddressType[]
  ): IUserActionCleanTypeResp;
}

export interface IUserActionSelectTypeResp {
  data: IType[] | IAddressType[];
  context: IUserActionContext;
}

export interface IUserActionCleanTypeResp {
  types: IType[];
  address: IAddressType[];
  context: IUserActionContext;
}

export interface IUserActionContext {
  type: 'delivery' | 'withdrawal' | 'reserve' | 'queue' | null;
  step: number;
  showInformationModal: boolean;
}

export interface IAddressType {
  id: string;
  companyName: string;
  fantasyName: string;
  cnpj: string;
  phone: string;
  address: string;
  zipCode: string;
  number: string;
  complement: string;
  marketplaceId: string;
  isSelected: boolean;
}

export interface ILocalLocation {
  location: {
    coords: {
      latitude: number;
      longitude: number;
    };
  };
}

export interface ICoord {
  lat: number;
  lng: number;
}

export interface IType {
  isSelected: boolean;
  type: 'delivery' | 'withdrawal' | 'reserve' | 'queue';
}

export interface ISelectPeriodTypeOptions {
  date: ISelectPeriodType;
  hour: ISelectPeriodType;
}

export interface ISelectPeriodType {
  isOpen: boolean;
}

export const types: IType[] = [
  {
    isSelected: true,
    type: 'delivery',
  },
  {
    isSelected: false,
    type: 'withdrawal',
  },
  {
    isSelected: false,
    type: 'reserve',
  },
];

export const addressTypes: IAddressType[] = [];
