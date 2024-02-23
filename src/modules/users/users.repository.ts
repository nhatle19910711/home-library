import { Injectable } from '@nestjs/common';
import { IUser } from './users.interface';
import { BaseRepository } from '../../base/base.repository';

@Injectable()
export class UsersRepository extends BaseRepository<IUser> {
  updatePassword(id: string, password: string) {
    const index = this.model.findIndex((user) => user.id === id);

    this.model[index] = {
      ...this.model[index],
      password: password,
      version: this.model[index].version + 1,
      updatedAt: new Date(),
    };

    return this.model[index];
  }
}
