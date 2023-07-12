import { IUser } from '../context/user';

export interface IUserOptionFactory {
  login(toke: string): Promise<IUser>;
  getUser(): Promise<IUser> | null;
  setUser(user: IUser): void;
  cleanUser(): Promise<any>;
  getTokenUser(): Promise<IUser> | null;
}
