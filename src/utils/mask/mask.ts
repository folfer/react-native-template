//@ts-ignore
import StringMask from 'string-mask';

const CPFFormater = (value: string): string => {
  let formatter = new StringMask('000.000.000-00');
  let result = formatter.apply(value);
  return result;
};

const CVVFormater = (value: string): string => {
  let formatter = new StringMask('0000');
  let result = formatter.apply(value);
  return result;
};

const CNPJFormater = (value: string): string => {
  let formatter = new StringMask('00.000.000/0000-00');
  let result = formatter.apply(value);
  return result;
};

export function cleanDocumentFormmater(document: string): string {
  let newString = document.replace(/[^\w\s]/gi, '');
  return newString;
}

export function documentFormatter(document: string): string {
  return document.length <= 11 ? CPFFormater(document) : CNPJFormater(document);
}

export function validatePixCaracteres(pixKey: string): boolean {
  return pixKey.match(/[^a-zA-Z0-9_\-\–\—@.]/g) ? false : true;
}

export function validateAddressCaracteres(value: any): boolean {
  return String(value).match(/[*();]/g) ? false : true;
}

export const maskPhone = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{4})(\d)/, '$1-$2');
};
