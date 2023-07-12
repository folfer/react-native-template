import { ServiceTypes, IServiceTypes } from '~/utils/interfaces';
export interface IConsumerContext {
  consumer: string;
  defineConsumer(consumer: ServiceTypes): void;
  consumerType: string;
  defineConsumerType(consumer: IServiceTypes): void;
  personQtd: string;
  definePersonQtd(qtd: string): void;
  ambient: string;
  defineAmbient(ambient: string): void;
  dateSelected: string;
  defineDate(date: string): void;
  hourSelected: string;
  defineHour(date: string): void;
}
