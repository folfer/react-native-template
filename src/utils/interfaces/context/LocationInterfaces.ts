import { IAddressType } from '..';

export interface IFullAddress {
  city: string;
  completeAddress: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  neighborhood: string;
  number: string;
  province: string;
  street: string;
  zipCode: string;
}

export interface ILocationContext {
  setLocationStorage(store: string): void;
  locationContext: string;
  setLocationContext(item: string): void;
  locationStorage: string;
  stores: IAddressType[];
  setStores(item: IAddressType[]): void;
  lat: number;
  lng: number;
  setNoHaveStores: any;
  noHaveStores: boolean;
  fullAddress: IFullAddress;
  setFullAddress(address: IFullAddress): void;
  setSelectedStoreId(id: string): void;
  selectedStoreId: string;
  setAddressUser: any;
  addressUser: any;
  setComplementUser: any;
  complementUser: string;
  setNumberUser: any;
  numberUser: string;
}
