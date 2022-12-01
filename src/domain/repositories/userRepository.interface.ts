import { UserModel } from '../model/user.model';

export interface UserRepository {
  insert(user: UserModel): Promise<void>;
  findAll(): Promise<UserModel[]>;
  findById(id: string): Promise<UserModel>;
  updateContent(id: string, user: UserModel): Promise<void>;

  deleteById(id: string): Promise<void>;
}