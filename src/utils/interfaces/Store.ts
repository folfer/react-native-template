export enum ServiceTypes {
  RESERVE = '1',
  WAITLIST = '2',
  DELIVERY = '3',
  TAKEAWAY = '4',
  DINEIN = '5',
}

export interface IStoreParams {
  lat?: string;
  lng?: string;
  query?: string;
  serviceId?: string;
}
