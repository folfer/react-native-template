import { IStringMap, IStringToBool } from '../interfaces/customTypes';
import { IField } from '../interfaces/fields';

export const defineLabel = (field: string): string => {
  const options: IStringMap = {
    email: 'E-mail',
    newPassword: 'Nova senha',
    password: 'Sua senha (deve conter ao menos 8 caracteres)',
    paswordddd: 'Senha',
    name: 'Nome Completo',
    document: 'CPF',
    phone: 'Telefone',
    birthday: 'Data de nascimento',
    confirmPassword: 'Confirme sua senha',
    code: 'Código',
    cardNumber: 'Número do cartão',
    userCardName: 'Nome no cartão',
    validity: 'Validade',
    cvv: 'CVV',
    cpf: 'CPF',
    surname: 'Apelido do cartão (opcional)',
    number: 'número',
    complement: 'complemento',
  };

  return options[field];
};

export const defineMask = (field: string): string => {
  const options: IStringMap = {
    birthday: '99/99/9999',
    document: '999.999.999-99',
    phone: '(99) 99999-9999',
    code: '999-999',
    cpf: '999.999.999-99',
    cvv: '9999',
    validity: '99/99',
    cardNumber: '9999 9999 9999 9999',
  };
  return options[field] || '';
};

export const defineKeyboardType = (field: string): string => {
  const options: IStringMap = {
    birthday: 'number',
    document: 'number',
    code: 'number',
    number: 'number',
  };
  return options[field] || 'default';
};

export const definePlaceholder = (field: string): string => {
  const options: IStringMap = {
    code: 'Código de verificação',
    number: 'número',
    complement: 'complemento',
  };
  return options[field] || defineLabel(field);
};

export const defineAutoFocus = (field: string): boolean => {
  const options: IStringToBool = {
    code: true,
  };
  return options[field] || false;
};

export const defineFields = (fields: string[]): IField[] => {
  return fields.map((item, index) => ({
    field: item,
    mask: defineMask(item),
    label: defineLabel(item),
    autoFocus: defineAutoFocus(item),
    placeholder: definePlaceholder(item),
    keyboardType: defineKeyboardType(item),
    returnKeyType: undefined,
  }));
};

export const dateFormmater = (date: string) => {
  return `${date.substr(0, 2)}/${date.substr(2, 2)}/${date.substr(4)}`;
};
