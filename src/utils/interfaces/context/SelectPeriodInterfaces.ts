export interface ISelectPeriodContext {
  selectedHour: string;
  date: ISelectPeriodDate;
  setSelectedHour(value: string): void;
  setDate(date: ISelectPeriodDate): void;
}

export interface ISelectPeriodDate {
  [key: string]: {
    selected: boolean;
    selectedColor: string;
  };
}
