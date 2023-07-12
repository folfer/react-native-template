import { IFullOrder } from '../api/Orders';

export interface IOrdersContext {
  order: IFullOrder;
  ordersToStatusId: string;
  defineOrderToStatusId(id: string): void;
  defineOrder(order: IFullOrder): void;
}
