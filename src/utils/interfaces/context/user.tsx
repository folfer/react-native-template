export interface IUserContext {
  user: IUser;
  token: string;
  setToken(token: string): void;
  setUser(user: IUser): void;
  isInitUser: boolean;
  tokenId: any;
}

export interface IUser {
  email: string;
  id: string;
  name: string;
  phone: string;
  token: string;
  gender: string;
  interest: string;
  document: string;
  birthDate: string;
}
