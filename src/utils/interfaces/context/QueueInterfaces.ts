import { IStore, IQueueGetResp } from '~/utils';

export interface IQueueContext {
  store: IStore;
  setStore(store: IStore): void;
  currentQueue: IQueueGetResp;
  setCurrentQueue(queue: IQueueGetResp): void;
  defineQueue(queue: IQueueGetResp): void;
}
