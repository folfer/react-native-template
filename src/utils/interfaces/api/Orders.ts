export interface IFullOrder {
  id: string;
  price: string;
  observation: string;
  discount: string;
  deliveryPrice: string;
  status: string;
  store: IFullOrderAvailableContacts;
  created: string;
  payment: any; // REMOVER ASSIM QUE POSSIVEL
  items: IFullOrderItems[];
  userAddressId: string;
  concluded: string;
  service: string;
  address: IFullOrderAddress;
}

export interface IFullOrderStore {
  id: string;
  companyName: string;
  availableContacts: IFullOrderAvailableContacts;
}

export interface IFullOrderAvailableContacts {
  whatsapp: string;
  phone: string;
}

export interface IFullOrderItems {
  id: string;
  productId: string;
  available: boolean;
  quantity: number;
  price: number;
  name: string;
  description: string;
  image: string;
  increments: IFullOrderItemIncrement[];
  itemPrice: number;
  observation: string;
}

export interface IFullOrderItemIncrement {
  id: string;
  incrementId: string;
  quantity: number;
  price: number;
  name: string;
  itemPrice: number;
}

export interface IFullOrderAddress {
  id: string;
  country: string;
  state: string;
  city: string;
  neighborhood: string;
  address: string;
  number: string;
  complement: string;
  reference: string;
  zipCode: string;
  alias: string;
  lat: number;
  lng: number;
}

export interface IMinOrder {
  id: string;
  date: string;
  payment: {
    brandImage: string;
    brandName: string;
    brand: string;
    lastDigits: number;
  };
  serviceId: string;
  serviceName: string;
  storeName: string;
  price: string;
  items?: IMinOrdersItem[];
  hasMoreItems: boolean;
  howManyItems: number;
}

export interface IMinOrdersItem {
  quantity: number;
  name: string;
}
