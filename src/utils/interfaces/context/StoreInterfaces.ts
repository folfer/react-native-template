import { IStore } from '~/utils';

export interface IStoreContext {
  store: IStore;
  defineStore(store: IStore): void;
}
