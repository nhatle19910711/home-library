import { Injectable } from '@nestjs/common';
import { IUser } from './users.interface';

@Injectable()
export class UsersRepository {
  private userModel: IUser[] = [];

  create(data: IUser): IUser {
    this.userModel.push(data);
    return data;
  }

  findById(id: string): IUser {
    return this.userModel.find((user) => user.id === id);
  }

  find(query: Partial<IUser>): IUser[] {
    return this.userModel.filter((user) => {
      for (const key in query) {
        if (!user[key] === query[key]) {
          false;
        }
      }
      return true;
    });
  }

  findAll(): IUser[] {
    return this.userModel;
  }

  updatePassword(id: string, password: string) {
    const index = this.userModel.findIndex((user) => user.id === id);

    this.userModel[index] = {
      ...this.userModel[index],
      password: password,
      version: this.userModel[index].version + 1,
      updatedAt: new Date(),
    };
    return this.userModel[index];
  }

  deleteById(id: string): void {
    const index = this.userModel.findIndex((user) => user.id === id);

    this.userModel.splice(index, 1);
  }
}
