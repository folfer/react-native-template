import moment from 'moment-with-locales-es6';
import { capitalizeString } from './word';

export const formatDateToSelector = (date: string): string => {
  const day =
    moment(date).format('D') === moment(new Date()).format('D')
      ? 'Today'
      : moment(new Date()).locale('pt-BR').format('dddd');

  return `${day}, ${moment(date)
    .locale('pt-BR')
    .format('DD [de] MMMM YYYY')}`.replace(/\b\w/g, (l) => l.toUpperCase());
};

export const formatedDate = (date: Date) => {
  const dayOfWeek = moment(date).locale('pt-BR').format('dddd').toUpperCase();
  const today = moment(date).locale('pt-BR').format('LL').toUpperCase();

  return `${dayOfWeek}, ${today}`;
};

export const formatDateToSelectorPicker = (date: string): string => {
  const day = moment(date).locale('pt-BR').format('dddd');

  return `${day}, ${moment(date)
    .locale('pt-BR')
    .format('DD [de] MMMM YYYY')}`;
};
export const formatDateToOrders = (date: string): string => {
  const day =
    moment(date).format('D') === moment(new Date()).format('D')
      ? moment(new Date()).locale('pt-BR').format('dddd')
      : moment(new Date()).locale('pt-BR').format('dddd');

  return capitalizeString(
    `${day.slice(0, 3)}, ${moment(date)
      .locale('pt-BR')
      .format('DD [de] MMMM YYYY')}`
  );
};

export const formatDateToOrdersV2 = (date: string) => {
  return moment(date).format('HH:mm');
};



export const generateKeys = () => {
  return Array.from(Array(24).keys()).filter((key) => key > 11);
};

export const populateKeys = (): string[] => {
  return generateKeys().reduce((acc, curr) => {
    return (acc = [...acc, `${curr}:00`, `${curr}:30`]);
  }, [] as string[]);
};

export const generateInvalidKeys = (): string[] => {
  const now = moment().format('kk:mm');
  const keys = populateKeys();
  return keys.filter(
    (item) => Number(item.replace(':', '')) < Number(now.replace(':', ''))
  );
};

export const generateDateToSelector = () => {
  return {
    keys: populateKeys(),
    invalidKeys: generateInvalidKeys(),
  };
};

export const calendarFormat = (date?: any) => {
  return date
    ? moment(date).format('YYYY-MM-DD')
    : moment().format('YYYY-MM-DD');
};
